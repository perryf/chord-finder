import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote } from '../../actions'
import './Staff.css'

class Staff extends Component {
	static propTypes = {
		// prop: PropTypes
	}

	componentWillMount() {
		// this.props.selectNote('c4')
		// this.props.selectNote('c5')
		// this.props.selectNote('g4')
	}

	selectNoteIntercept = value => {
		const { staffNotes, selectNote } = this.props

		const selectedNotes = staffNotes.filter(n => n.selected)
		console.log(selectedNotes)

		selectNote(value)

		const found = selectedNotes.find(
			n => n.value === value && n.selected && n.isNatural
		)

		if (found) {
			console.log(found)

			selectNote(found.value + 1)
		}
	}

	render() {
		const { staffNotes, selectNote } = this.props
		return (
			<div className="staffBox">
				<div>
					<div
						className="staff"
						// onClick={this.handleClickStaff}
					>
						<div className="clefBox">
							<img src="/images/G-clef.svg" className="clef" alt="g-clef" />
						</div>
						{staffNotes.map((note, index) => {
							return index % 2 ? (
								// * Line notes
								<div
									className="flexRow flexCenter staffLineBox staffRow"
									key={note.id}
									id={note.id}
									onClick={() => this.selectNoteIntercept(note.value)}
								>
									<div
										id={note.id}
										className={`flexRow flexCenter 
											${note.isMiddleC ? 'staffLineC' : 'staffLine'}
										`}
									>
										<div
											id={note.id}
											tabIndex={-1}
											className={`noteHead ${note.selected ? '' : 'inVisible'}`}
										>
											{note.accidental && (
												<span tabIndex={-1} className="accidental">
													{note.favorSharps ? '#' : <em>b</em>}
												</span>
											)}
										</div>
									</div>
								</div>
							) : (
								// * Space notes
								<div
									className="flexRow flexCenter staffSpace staffRow"
									key={note.id}
									id={note.id}
									onClick={() => this.selectNoteIntercept(note.value)}
								>
									<div
										id={note.id}
										tabIndex={-1}
										className={`noteHead ${note.selected ? '' : 'inVisible'}`}
									>
										{note.accidental && (
											<span tabIndex={-1} className="accidental">
												{note.favorSharps ? '#' : <em>b</em>}
											</span>
										)}
									</div>
								</div>
							)
						})}
						<div className="staffSpace" />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes.reverse(),
		staffNotes: state.notes.filter(a => a.isNatural)
	}
}

const mapDispatchToProps = dispatch => ({
	selectNote: id => dispatch(selectNote(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)
