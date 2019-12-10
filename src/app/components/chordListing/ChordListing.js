import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSelectedNotes, getMatchingChords } from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

class ChordListing extends Component {
	constructor(props) {
		super(props)
		this.state = { hoverVal: '' }
	}

	handleHoverChord = (name, chordInfo) => {
		// TODO -> Hover over chords
		console.log(name, chordInfo)

		this.setState({ hoverVal: name })
	}

	render() {
		const { matchingChords, checkBoxes, favorSharps, rootMatch } = this.props
		const { hoverVal } = this.state

		const checkBoxArr = Object.keys(checkBoxes).filter(c => checkBoxes[c])

		const filteredChords = matchingChords.map(note => {
			let chordsUpdate = note.chords.filter(c => checkBoxArr.includes(c.type))
			if (rootMatch) {
				chordsUpdate = chordsUpdate.filter(c => c.rootMatch)
			}

			return { ...note, chords: chordsUpdate }
		})

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

												console.log(chordPrefix, chord.short)

												const chordName = `${chordPrefix} ${chord.short}`

												return (
													<div
														key={chord.short}
														className="chordName pointer"
														onMouseOver={() =>
															this.handleHoverChord(chordName, chord)
														}
														onMouseLeave={() => this.handleHoverChord('')}
													>
														<span
															className={`${
																chord.perfectMatch ? 'perfectMatch' : ''
															}`}
														>
															{chordName}
														</span>
														{hoverVal === chordName && (
															<div className="hoverInfo">
																{chordPrefix} {chord.label}
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
