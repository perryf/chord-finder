import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	getSelectedNotes,
	getMatchingChords,
	getNoteByValue
} from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

const stateInit = { hoverName: '', hoverDetailStr: '', hoverDetailArr: [] }

class ChordListing extends Component {
	constructor(props) {
		super(props)
		this.state = { hoverName: '', hoverDetailArr: [] }
	}

	handleHoverChord = (name, chordInfo) => {
		// * For when mouse leaves chord
		if (!name) {
			this.setState(stateInit)
			return
		}

		const chordNotes = chordInfo.notes.reduce((acc, n) => {
			return acc.concat(getNoteByValue(n, this.props.favorSharps))
		}, [])

		this.setState({ hoverName: name, hoverDetailArr: chordNotes })
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
				<h4>{totalChords} possible chords</h4>
				<ChordFilters />
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

												const chordName = `${chordPrefix} ${chord.short}`

												return (
													<div
														key={chord.short}
														className="chordName pointer"
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
																<div className="flexColumnCenter hoverInfoNotes">
																	{hoverDetailArr.map(note => (
																		<span key={note}>{note}</span>
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
	checkBoxes: PropTypes.object.isRequired,
	rootMatch: PropTypes.bool.isRequired,
	favorSharps: PropTypes.bool.isRequired
}

const mapStateToProps = ({ notesMaster = {}, ui }) => {
	const selectedNotes = getSelectedNotes(notesMaster)
	const matchingChords = getMatchingChords(selectedNotes)

	return {
		matchingChords,
		checkBoxes: ui.checkBoxes,
		favorSharps: ui.favorSharps,
		rootMatch: ui.rootMatch
	}
}

export default connect(mapStateToProps)(ChordListing)
