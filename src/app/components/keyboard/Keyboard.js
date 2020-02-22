import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote } from 'app/redux/actions'
import { shapeToKeys, formatNoteId } from 'helperFunctions'
import './Keyboard.css'

const Keyboard = props => {
	const {
		notesMaster,
		selectNote,
		deselectNote,
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

	return (
		<div className="keyboardWhole">
			<div className="keyboardBox">
				{notesMaster.map(noteObj => {
					const selected = noteObj.notes.find(note => note.selected)

					return noteObj.blackKey ? (
						<div
							onClick={() => selectNoteIntercept(noteObj)}
							className="blackKeyBox"
							key={noteObj.id}
						>
							<div className={`blackKey ${selected ? 'keySelected' : ''}`} />
						</div>
					) : (
						<div
							onClick={() => selectNoteIntercept(noteObj)}
							key={noteObj.id}
							className={`whiteKey ${selected ? 'keySelected' : ''}`}
						/>
					)
				})}
			</div>
		</div>
	)
}

Keyboard.propTypes = {
	notesMaster: PropTypes.array.isRequired,
	favorSharps: PropTypes.bool.isRequired,
	selectNote: PropTypes.func.isRequired,
	deselectNote: PropTypes.func.isRequired,
	mute: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
	notesMaster: shapeToKeys(state),
	favorSharps: state.ui.favorSharps,
	mute: state.ui.mute
})

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
