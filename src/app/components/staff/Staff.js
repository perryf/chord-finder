import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectNote } from 'app/redux/actions';
import { shapeToStaff } from 'helperFunctions/transformers';
import StaffLine from './StaffLine';
import StaffSpace from './StaffSpace';
import './Staff.css';

class Staff extends Component {
	static propTypes = {
		// prop: PropTypes
	};

	componentWillMount() {
		// this.props.selectNote('c4')
		// this.props.selectNote('c5')
		// this.props.selectNote('g4')
	}

	selectNoteIntercept = noteObj => {
		// const { staffNotes, selectNote } = this.props
		// const selectedNotes = staffNotes.filter(n => n.selected)

		// selectNote(value)

		// const found = selectedNotes.find(
		// 	n => n.value === value && n.selected && n.isNatural
		// )

		// if (found) {
		// 	selectNote(found.value + 1)
		// }
		// console.log(noteObj, noteObj.notes.natural.value)
		this.props.selectNote(noteObj);
	};

	render() {
		const { selectNote, notesMaster } = this.props;
		// console.log(notesMaster)
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
						);
					})}
					<div className="staffRow" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notesMaster: shapeToStaff(state).reverse()
		// notes: state.notes.reverse(),
		// staffNotes: state.notes.filter(a => a.isNatural),
	};
};

const mapDispatchToProps = dispatch => ({
	selectNote: id => dispatch(selectNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);

// <div className="staffBox">
// 				<div>
// 					<div
// 						className="staff"
// 						// onClick={this.handleClickStaff}
// 					>
// 						<div className="clefBox">
// 							<img src="/images/G-clef.svg" className="clef" alt="g-clef" />
// 						</div>
// 						{staffNotes.map((note, index) => {
// 							return index % 2 ? (
// 								// * Line notes
// 								<div
// 									className="flexRow flexCenter staffLineBox staffRow"
// 									key={note.id}
// 									id={note.id}
// 									// onClick={() => this.selectNoteIntercept(note.value)}
// 								>
// 									<div
// 										id={note.id}
// 										className={`flexRow flexCenter
// 											${note.isMiddleC ? 'staffLineC' : 'staffLine'}
// 										`}
// 									>
// 										<div
// 											id={note.id}
// 											tabIndex={-1}
// 											className={`noteHead ${note.selected ? '' : 'inVisible'}`}
// 										>
// 											{note.accidental && (
// 												<span tabIndex={-1} className="accidental">
// 													{note.favorSharps ? '#' : <em>b</em>}
// 												</span>
// 											)}
// 										</div>
// 									</div>
// 								</div>
// 							) : (
// 								// * Space notes
// 								<div
// 									className="flexRow flexCenter staffSpace staffRow"
// 									key={note.id}
// 									id={note.id}
// 									// onClick={() => this.selectNoteIntercept(note.value)}
// 								>
// 									<div
// 										id={note.id}
// 										tabIndex={-1}
// 										className={`noteHead ${note.selected ? '' : 'inVisible'}`}
// 									>
// 										{note.accidental && (
// 											<span tabIndex={-1} className="accidental">
// 												{note.favorSharps ? '#' : <em>b</em>}
// 											</span>
// 										)}
// 									</div>
// 								</div>
// 							)
// 						})}
// 						<div className="staffSpace" />
// 					</div>
// 				</div>
// 			</div>
