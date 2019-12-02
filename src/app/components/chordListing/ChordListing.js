import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSelectedNotes, getMatchingChords } from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

class ChordListing extends Component {
	static propTypes = {
		matchingChords: PropTypes.array.isRequired,
		checkBoxes: PropTypes.object.isRequired,
		rootMatch: PropTypes.bool.isRequired,
		favorSharps: PropTypes.bool.isRequired
	}

	constructor(props) {
		super(props)
		this.state = {
			checkBoxes: {
				basic: true,
				common: true,
				uncommon: true,
				rare: false
			}
		}
	}

	handleCheck = ({ target: { value } }) => {
		this.setState(state => ({
			checkBoxes: {
				...state.checkBoxes,
				[value]: !state.checkBoxes[value]
			}
		}))
	}

	render() {
		const { matchingChords, checkBoxes, favorSharps, rootMatch } = this.props
		const checkBoxArr = Object.keys(checkBoxes).filter(c => checkBoxes[c])

		const filteredChords = matchingChords.map(note => {
			let chordsUpdate = note.chords.filter(c => checkBoxArr.includes(c.type))

			if (rootMatch) {
				chordsUpdate = note.chords.filter(c => c.rootMatch)
			}

			return {
				...note,
				chords: chordsUpdate
			}
		})

		const totalChords = filteredChords.reduce((acc, c) => {
			return acc + c.chords.length
		}, 0)

		return (
			<div style={{ margin: '20px auto', width: '50%' }}>
				<h4>{totalChords} possible chords</h4>
				<ChordFilters />
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
												<div key={chord.short} className="chordName">
													<span
														className={`${
															chord.perfectMatch ? 'perfectMatch' : ''
														} ${
															rootMatch && chord.rootMatch ? 'rootMatch' : ''
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
			</div>
		)
	}
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
