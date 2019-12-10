import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSelectedNotes, getMatchingChords } from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

const ChordListing = props => {
	const handleHoverChord = value => {
		// TODO -> Hover over chords
	}

	const { matchingChords, checkBoxes, favorSharps, rootMatch } = props
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
											const chordName = `${
												favorSharps
													? c.noteInfo.label
													: c.noteInfo.type === 'natural'
													? c.noteInfo.label
													: c.noteInfo.altLabel
											}`

											return (
												<div
													key={chord.short}
													className="chordName"
													onMouseOver={() => handleHoverChord(chord)}
												>
													<span
														className={`${
															chord.perfectMatch ? 'perfectMatch' : ''
														}`}
													>
														{chordName}
														{chord.short}
													</span>
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
