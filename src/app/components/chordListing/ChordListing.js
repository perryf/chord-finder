import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSelectedNotes, getMatchingChords } from 'helperFunctions'
import ChordFilters from './ChordFilters'
import './ChordListing.css'

class ChordListing extends Component {
	static propTypes = {
		notesMaster: PropTypes.object.isRequired,
		matchingChords: PropTypes.array.isRequired,
		selectedNotes: PropTypes.array.isRequired
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
		const {
			notesMaster,
			selectedNotes,
			matchingChords,
			checkBoxes,
			favorSharps
		} = this.props

		const checkBoxArr = Object.keys(checkBoxes).filter(c => checkBoxes[c])

		const filteredChords = matchingChords.map(note => {
			return {
				...note,
				chords: note.chords.filter(c => checkBoxArr.includes(c.type))
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
											const chordName = `${
												favorSharps
													? c.noteInfo.label
													: c.noteInfo.type === 'natural'
													? c.noteInfo.label
													: c.noteInfo.altLabel
											}${chord.short}`

											return (
												<div key={chord.short}>
													<span
														className={`${
															chord.exactMatch ? 'exactMatch' : ''
														}`}
													>
														{chordName}
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
		notesMaster,
		matchingChords,
		selectedNotes,
		checkBoxes: ui.checkBoxes,
		favorSharps: ui.favorSharps
	}
}

export default connect(mapStateToProps)(ChordListing)
