import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote } from 'app/redux/actions'
import { shapeToStaff } from 'helperFunctions/transformers'
import StaffLine from './StaffLine'
import StaffSpace from './StaffSpace'
import './Staff.css'

// * Determines whether or not note should shift to the right due to previous note being selected
const notePositionShifter = (index, notesMaster) => {
	let shouldShift = false
	for (let i = index + 1; i < notesMaster.length; i++) {
		const thisNote = notesMaster[i]
		let noteSelected = false

		Object.keys(thisNote.notes).forEach(n => {
			if (thisNote.notes[n].selected) {
				noteSelected = true
			}
		})

		if (!noteSelected) {
			break
		} else {
			shouldShift = !shouldShift
		}
	}
	return shouldShift
}

const Staff = props => {
	const { notesMaster, favorSharps, selectNote, deselectNote } = props

	const selectNoteIntercept = noteObj => {
		let noteId = ''
		let newType = 'natural'

		// * Finds selected note, updates variables
		Object.keys(noteObj.notes).forEach(key => {
			const note = noteObj.notes[key]

			if (note.selected) {
				noteId = note.id

				if (note.type === 'natural') {
					newType = favorSharps ? 'sharp' : 'flat'
				}
				if (note.type === 'sharp' || note.type === 'flat') {
					newType = ''
				}
			}
		})

		if (newType && !noteObj.notes[newType].ghost) {
			selectNote(noteObj.notes[newType].id)
		}
		if (noteId) {
			deselectNote(noteId)
		}
	}

	// * List of notes adjacent to staff
	const noteList = notesMaster.reduce((acc, noteObj) => {
		const notes = [
			noteObj.notes.flat,
			noteObj.notes.sharp,
			noteObj.notes.natural
		]
		const selectedNotes = notes.filter(n => n.selected)

		return acc.concat(selectedNotes)
	}, [])

	return (
		<div className="staffBox">
			<div className="staff">
				<div className="clefBox">
					<img src="/images/G-clef.svg" className="clef" alt="g-clef" />
				</div>

				{notesMaster.map((note, i) => {
					const prevSelected = notePositionShifter(i, notesMaster)

					return note.staffInfo.staffType === 'line' ? (
						<StaffLine
							handleSelectNote={selectNoteIntercept}
							note={note}
							key={note.id}
							prevSelected={prevSelected}
						/>
					) : (
						<StaffSpace
							handleSelectNote={selectNoteIntercept}
							note={note}
							key={note.id}
							prevSelected={prevSelected}
						/>
					)
				})}
				<div className="fillerNote" />
			</div>
			<div className="noteList">
				{noteList.map(note => (
					<span key={note.id}>
						{note.label}
						{note.accidentalTag || ''}
					</span>
				))}
			</div>
		</div>
	)
}

Staff.propTypes = {
	favorSharps: PropTypes.bool.isRequired,
	notesMaster: PropTypes.array.isRequired,
	selectNote: PropTypes.func.isRequired,
	deselectNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	notesMaster: shapeToStaff(state).reverse(),
	favorSharps: state.ui.favorSharps
})

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
