import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote, handleHoverNote } from 'app/redux/actions'
import { shapeToKeys, formatNoteId } from 'helperFunctions'
import './Keyboard.css'

const Keyboard = props => {
	const {
		notesMaster,
		selectNote,
		deselectNote,
		handleHoverNote,
		hoverNote,
		favorSharps,
		mute,
		synth
	} = props

	const selectNoteIntercept = noteObj => {
		let id = ''
		let selected = ''

		// * Handles Sharps / Flats
		if (noteObj.id.includes('B') || noteObj.id.includes('S')) {
			const update = noteObj.notes.find(n => {
				return favorSharps ? n.type === 'sharp' : n.type === 'flat'
			})
			// * accidental swap (handles cases where accidental note was previously selected and then selected again with different value for favorSharps)
			const bizarro = noteObj.notes.find(n => {
				return favorSharps ? n.type === 'flat' : n.type === 'sharp'
			})

			if (bizarro && bizarro.selected) {
				selected = bizarro.selected ? true : false
				id = bizarro.id
			} else if (update) {
				selected = update.selected
				id = update.id
			}

			// * Handles Naturals
		} else {
			selected = noteObj.notes[0].selected
			id = noteObj.id
		}

		if (!selected && !mute) {
			const toneId = formatNoteId(noteObj.id)
			synth.triggerAttackRelease(toneId, '8n')
		}

		selected ? deselectNote(id) : selectNote(id)
	}

	const hoverIntercept = noteObj => {
		noteObj ? handleHoverNote(noteObj.id) : handleHoverNote(null)
	}

	return (
		<div className="keyboardWhole">
			<div className="keyboardBox">
				{notesMaster.map(noteObj => {
					const selected = noteObj.notes.find(note => note.selected)

					return noteObj.blackKey ? (
						<div
							key={noteObj.id}
							className="blackKeyBox"
							onClick={() => selectNoteIntercept(noteObj)}
							onMouseEnter={() => hoverIntercept(noteObj)}
							onMouseLeave={() => hoverIntercept(null)}
						>
							<div
								className={`key blackKey ${selected ? 'keySelected' : ''} ${
									hoverNote === noteObj.id ? 'hovered' : ''
								}`}
							/>
						</div>
					) : (
						<div
							key={noteObj.id}
							className={`key whiteKey ${selected ? 'keySelected' : ''} ${
								hoverNote === noteObj.id ? 'hovered' : ''
							}`}
							onClick={() => selectNoteIntercept(noteObj)}
							onMouseEnter={() => hoverIntercept(noteObj)}
							onMouseLeave={() => hoverIntercept(null)}
						/>
					)
				})}
			</div>
		</div>
	)
}

Keyboard.propTypes = {
	notesMaster: PropTypes.array.isRequired,
	synth: PropTypes.object.isRequired,
	favorSharps: PropTypes.bool.isRequired,
	mute: PropTypes.bool.isRequired,
	hoverNote: PropTypes.string,
	selectNote: PropTypes.func.isRequired,
	deselectNote: PropTypes.func.isRequired,
	handleHoverNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	notesMaster: shapeToKeys(state),
	favorSharps: state.ui.favorSharps,
	mute: state.ui.mute,
	hoverNote: state.ui.hoverNote
})

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId)),
	handleHoverNote: noteId => dispatch(handleHoverNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
