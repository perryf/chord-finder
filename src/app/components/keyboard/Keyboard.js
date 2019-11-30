import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote, deselectNote } from 'app/redux/actions'
import { shapeToKeys } from 'helperFunctions/transformers'
import './Keyboard.css'

class Keyboard extends Component {
	static propTypes = {
		favorSharps: PropTypes.bool.isRequired,
		notesMaster: PropTypes.array.isRequired,
		selectNote: PropTypes.func.isRequired
	}

	selectNoteIntercept = noteObj => {
		const { selectNote, deselectNote, favorSharps } = this.props

		if (noteObj.id.includes('B') || noteObj.id.includes('S')) {
			const update = noteObj.notes.find(n => {
				return favorSharps ? n.type === 'sharp' : n.type === 'flat'
			})

			if (update.selected) {
				deselectNote(update.id)
			} else {
				selectNote(update.id)
			}
		} else {
			if (noteObj.notes[0].selected) {
				deselectNote(noteObj.id)
			} else {
				selectNote(noteObj.id)
			}
		}
	}

	render() {
		const { notesMaster } = this.props

		return (
			<div className="keyboardWhole">
				<div className="keyboardBox">
					{notesMaster.map(noteObj => {
						const selected = noteObj.notes.find(note => note.selected)
						return noteObj.blackKey ? (
							<div
								onClick={() => this.selectNoteIntercept(noteObj)}
								className="blackKeyBox"
								key={noteObj.id}
							>
								<div
									key={noteObj.id}
									className={`blackKey ${selected ? 'keySelected' : ''}`}
								/>
							</div>
						) : (
							<div
								onClick={() => this.selectNoteIntercept(noteObj)}
								key={noteObj.id}
								className={`whiteKey ${selected ? 'keySelected' : ''}`}
								key={noteObj.id}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notesMaster: shapeToKeys(state),
		favorSharps: state.ui.favorSharps,
		selectNote: PropTypes.func.isRequired
	}
}

const mapDispatchToProps = dispatch => ({
	selectNote: noteId => dispatch(selectNote(noteId)),
	deselectNote: noteId => dispatch(deselectNote(noteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
