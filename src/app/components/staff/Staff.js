import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { PolySynth, Compressor, Master } from 'tone'
import { selectNote, deselectNote } from 'app/redux/actions'
import { shapeToStaff, formatNoteId } from 'helperFunctions'
import StaffRow from './StaffRow'
import './Staff.css'

const compressor = new Compressor()
const synth = new PolySynth().chain(compressor, Master)

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
	const { notesMaster, favorSharps, selectNote, deselectNote, mute } = props

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
					<img
						src={`${process.env.PUBLIC_URL}/images/G-clef.svg`}
						className="clef"
						alt="g-clef"
					/>
				</div>

				{notesMaster.map((note, i) => {
					const prevSelected = notePositionShifter(i, notesMaster)

					return (
						<StaffRow
							key={note.id}
							handleSelectNote={selectNoteIntercept}
							note={note}
							// TODO -> change "row" in data to "space"
							type={note.staffInfo.staffType === 'line' ? 'line' : 'space'}
							prevSelected={prevSelected}
						/>
					)

					// ! Delete if no longer used
					// return note.staffInfo.staffType === 'line' ? (
					// 	<StaffLine
					// 		handleSelectNote={selectNoteIntercept}
					// 		note={note}
					// 		key={note.id}
					// 		prevSelected={prevSelected}
					// 	/>
					// ) : (
					// 	<StaffSpace
					// 		handleSelectNote={selectNoteIntercept}
					// 		note={note}
					// 		key={note.id}
					// 		prevSelected={prevSelected}
					// 	/>
					// )
				})}
				<div className="fillerNote" />
			</div>
			{// ! DELETE IF NO LONGER USED
			false && (
				<div className="noteList">
					{noteList.map(note => (
						<span key={note.id}>
							{note.label}
							{note.accidentalTag || ''}
						</span>
					))}
				</div>
			)}
		</div>
	)
}

Staff.propTypes = {
	favorSharps: PropTypes.bool.isRequired,
	notesMaster: PropTypes.array.isRequired,
	selectNote: PropTypes.func.isRequired,
	deselectNote: PropTypes.func.isRequired,
	mute: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
	notesMaster: shapeToStaff(state).reverse(),
	favorSharps: state.ui.favorSharps,
	mute: state.ui.mute
})

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
