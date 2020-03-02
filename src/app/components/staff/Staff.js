import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote, handleHoverNote } from 'app/redux/actions'
import { shapeToStaff, formatNoteId } from 'helperFunctions'
import StaffRow from './StaffRow'
import './Staff.css'

// * Determines whether or not note should shift to the right due to previous note being selected
const notePositionShifter = (index, notesMaster) => {
	let shouldShift = false

	for (let i = index + 1; i < notesMaster.length; i++) {
		const prevNote = notesMaster[i]
		let noteSelected = false
		let prevCount = 0

		Object.keys(prevNote.notes).forEach(n => {
			if (prevNote.notes[n].selected) {
				noteSelected = true
				prevCount = prevCount + 1
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
	const {
		notesMaster,
		favorSharps,
		selectNote,
		deselectNote,
		handleHoverNote,
		hoverNote,
		mute,
		synth
	} = props

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
			if (!mute) {
				const toneId = formatNoteId(noteObj.notes[newType].id)
				synth.triggerAttackRelease(toneId, '8n')
			}

			selectNote(noteObj.notes[newType].id)
		}
		if (noteId) {
			deselectNote(noteId)
		}
	}

	const hoverIntercept = noteObj => {
		noteObj ? handleHoverNote(noteObj.id) : handleHoverNote(null)
	}

	return (
		<div className="staffBox">
			<div className="staff">
				<div className="clefBox">
					<img
						src={`${process.env.PUBLIC_URL}/images/G-clef.svg`}
						className="clef"
						alt="g-clef"
					/>
				</div>

				{notesMaster.map((note, i) => (
					<StaffRow
						key={note.id}
						handleSelectNote={selectNoteIntercept}
						handleHover={hoverIntercept}
						hoverNote={hoverNote}
						note={note}
						// TODO -> change "row" in data to "space"
						type={note.staffInfo.staffType === 'line' ? 'line' : 'space'}
						prevSelected={notePositionShifter(i, notesMaster)}
					/>
				))}
				<div className="fillerNote" />
			</div>
		</div>
	)
}

Staff.propTypes = {
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
	notesMaster: shapeToStaff(state).reverse(),
	favorSharps: state.ui.favorSharps,
	mute: state.ui.mute,
	hoverNote: state.ui.hoverNote
})

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId)),
	handleHoverNote: noteId => dispatch(handleHoverNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
