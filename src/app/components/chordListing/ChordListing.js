import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { PolySynth, Compressor, Master } from 'tone'
import {
	getSelectedNotes,
	getMatchingChords,
	getNoteByValue
} from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

const compressor = new Compressor()
const synth = new PolySynth(20).chain(compressor, Master)

const stateInit = { hoverName: '', hoverDetailArr: [{}] }

class ChordListing extends Component {
	constructor(props) {
		super(props)
		this.state = stateInit
	}

	handleHoverChord = (name, chordInfo) => {
		const { favorSharps, selectedNotes } = this.props

		// * For when mouse leaves chord
		if (!name) {
			this.setState(stateInit)
			return
		}

		let noteRegister = 4
		const chordNotes = chordInfo.notes.reduce((acc, n, i) => {
			const noteName = getNoteByValue(n, favorSharps)
			const altName = getNoteByValue(n, !favorSharps)

			if (chordInfo.notes[i - 1] && n < chordInfo.notes[i - 1]) {
				noteRegister = 5
			}

			const note = {
				name:
					noteName + (altName && altName !== noteName ? ` [${altName}]` : ''),
				noteId: noteName + noteRegister,
				selected: selectedNotes.find(n => n.label === noteName)
			}

			return [note].concat(acc)
		}, [])

		this.setState({ hoverName: name, hoverDetailArr: chordNotes })
	}

	playChord = () => {
		if (!this.props.mute) {
			const noteIds = this.state.hoverDetailArr.map(n => n.noteId)

			if (noteIds) {
				synth.triggerAttackRelease(noteIds, '8n')
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
												// TODO -> Redo this var assignment
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
														onMouseOver={() => {
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
															<div className="hoverInfo">
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
	matchingChords: PropTypes.array.isRequired,
	selectedNotes: PropTypes.array.isRequired,
	checkBoxes: PropTypes.object.isRequired,
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
		mute: ui.mute
	}
}

export default connect(mapStateToProps)(ChordListing)
