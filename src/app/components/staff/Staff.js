import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote } from 'app/redux/actions'
import { shapeToStaff } from 'helperFunctions/transformers'
import StaffLine from './StaffLine'
import StaffSpace from './StaffSpace'
import './Staff.css'

class Staff extends Component {
	static propTypes = {
		favorSharps: PropTypes.bool.isRequired,
		selectNote: PropTypes.func.isRequired,
		notesMaster: PropTypes.array.isRequired
	}

	selectNoteIntercept = noteObj => {
		const { favorSharps, selectNote, deselectNote } = this.props
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

	render() {
		const { notesMaster } = this.props

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

					{notesMaster.map(note => {
						return note.staffInfo.staffType === 'line' ? (
							<StaffLine
								handleSelectNote={this.selectNoteIntercept}
								note={note}
								key={note.id}
							/>
						) : (
							<StaffSpace
								handleSelectNote={this.selectNoteIntercept}
								note={note}
								key={note.id}
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
