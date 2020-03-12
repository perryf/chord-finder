import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Tone from 'tone'
import {
	getSelectedNotes,
	getMatchingChords,
	getNoteByValue
} from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

const hoverInit = { hoverName: '', hoverDetailArr: [{}] }

class ChordListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...hoverInit,
			playing: false
		}
	}

	handleHoverChord = (name, chordInfo) => {
		const { favorSharps, selectedNotes } = this.props

		// * For when mouse leaves chord
		if (!name) {
			this.setState(hoverInit)
			return
		}

		let noteRegister = 4
		const chordNotes = chordInfo.notes.reduce((acc, n, i, arr) => {
			const noteName = getNoteByValue(n, favorSharps)
			const altName = getNoteByValue(n, !favorSharps)
			const prev = arr[i - 1]

			// * Moves note octave higher if absolute value is lower than preceding note (i.e. Bb, D -- D would be moved up/given 5)
			if (prev && n < prev) {
				const found = acc.find(n => n.value === prev)
				noteRegister = found.noteRegister + 1
			}

			const note = {
				name:
					noteName + (altName && altName !== noteName ? ` [${altName}]` : ''),
				noteId: noteName + noteRegister,
				noteRegister,
				value: n,
				selected: selectedNotes.find(n => n.label === noteName) || null
			}

			return [note].concat(acc)
		}, [])

		this.setState({ hoverName: name, hoverDetailArr: chordNotes })
	}

	handleUnhover = () => {
		this.setState(hoverInit)
	}

	playChord = () => {
		const { synth, mute, arpeggiate, direction } = this.props
		if (!mute) {
			const noteIds = this.state.hoverDetailArr.map(n => n.noteId)

			if (noteIds && !this.state.playing) {
				this.setState({ playing: true })

				// * Arpeggio
				if (arpeggiate === 'fast' || arpeggiate === 'slow') {
					const speed = arpeggiate === 'fast' ? '16n' : '8n'

					console.log(noteIds.slice().reverse())
					let i = 0
					const pattern = new Tone.Pattern(
						(_, note) => {
							i++
							synth.triggerAttackRelease(note, speed)
							if (i === noteIds.length) {
								pattern.stop()
								Tone.Transport.stop()
								this.setState({ playing: false })
							}
						},
						noteIds.slice().reverse(),
						direction
					)

					pattern.iterations = noteIds.length
					pattern.interval = speed

					pattern.start(0)
					Tone.Transport.start()
					// * Block Chord
				} else {
					synth.triggerAttackRelease(noteIds, '8n')
					this.setState({ playing: false })
				}
			}
		}
	}

	render() {
		const { matchingChords, checkBoxes, favorSharps, rootMatch } = this.props
		const { hoverName, hoverDetailArr } = this.state

		const checkBoxArr = Object.keys(checkBoxes).filter(c => checkBoxes[c])
		const filteredChords = matchingChords.map(note => ({
			...note,
			chords: note.chords.filter(c => {
				return checkBoxArr.includes(c.type) && (rootMatch ? c.rootMatch : true)
			})
		}))
		const totalChords = filteredChords.reduce((acc, c) => {
			return acc + c.chords.length
		}, 0)

		return (
			<div className="chordListingBox">
				<div className="chordListingTop">
					<h4>{totalChords} possible chords</h4>
					<ChordFilters />
				</div>
				{totalChords > 0 && (
					<div className="chordListing">
						{filteredChords.map(c => {
							return (
								c.chords.length > 0 && (
									<div key={c.id}>
										<div className="chordRow">
											{c.chords.map(chord => {
												const chordPrefix = `${
													favorSharps
														? c.noteInfo.label
														: c.noteInfo.type === 'natural'
														? c.noteInfo.label
														: c.noteInfo.altLabel
												}`

												const chordName = `
													${chordPrefix}${chord.abbr || chord.short}
												`

												return (
													<div
														key={chord.short}
														className="chordName pointer"
														onClick={this.playChord}
														onMouseEnter={() => {
															this.handleHoverChord(chordName, chord)
														}}
														onMouseLeave={() => this.handleHoverChord('')}
													>
														<span
															className={
																chord.perfectMatch ? 'perfectMatch' : ''
															}
														>
															{chordName}
														</span>
														{hoverName === chordName && (
															<div
																className="hoverInfo"
																onMouseEnter={this.handleUnhover}
															>
																<p className="hoverInfoName">
																	{chordPrefix} {chord.label}
																</p>
																<div className="flexColumn hoverInfoNotes">
																	{hoverDetailArr.map(note => (
																		<span
																			key={note.name}
																			className={
																				note.selected ? 'perfectMatch' : ''
																			}
																		>
																			{note.name}
																		</span>
																	))}
																</div>
															</div>
														)}
													</div>
												)
											})}
										</div>
										<div className="rowBreak" />
									</div>
								)
							)
						})}
					</div>
				)}
			</div>
		)
	}
}

ChordListing.propTypes = {
	selectedNotes: PropTypes.array.isRequired,
	matchingChords: PropTypes.array.isRequired,
	synth: PropTypes.object.isRequired,
	checkBoxes: PropTypes.object.isRequired,
	arpeggiate: PropTypes.string.isRequired,
	direction: PropTypes.string.isRequired,
	rootMatch: PropTypes.bool.isRequired,
	favorSharps: PropTypes.bool.isRequired,
	mute: PropTypes.bool.isRequired
}

const mapStateToProps = ({ notesMaster = {}, ui }) => {
	const selectedNotes = getSelectedNotes(notesMaster)
	const matchingChords = getMatchingChords(selectedNotes)

	return {
		selectedNotes,
		matchingChords,
		checkBoxes: ui.checkBoxes,
		favorSharps: ui.favorSharps,
		rootMatch: ui.rootMatch,
		mute: ui.mute,
		arpeggiate: ui.arpeggiate,
		direction: ui.direction
	}
}

export default connect(mapStateToProps)(ChordListing)
