import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectNote } from 'app/redux/actions';
import { shapeToStaff } from 'helperFunctions/transformers';
import StaffLine from './StaffLine';
import StaffSpace from './StaffSpace';
import './Staff.css';

class Staff extends Component {
	static propTypes = {
		favorSharps: PropTypes.bool.isRequired,
		selectNote: PropTypes.func.isRequired,
		notesMaster: PropTypes.array.isRequired
	};

	selectNoteIntercept = noteObj => {
		const { favorSharps } = this.props;
		this.props.selectNote(noteObj, favorSharps);
	};

	render() {
		const { notesMaster } = this.props;

		const noteList = notesMaster.reduce((acc, noteObj, index, self) => {
			const notes = [
				noteObj.notes.flat,
				noteObj.notes.sharp,
				noteObj.notes.natural
			];

			const selectedNotes = notes.filter(n => n.selected);

			return acc.concat(selectedNotes);
		}, []);

		return (
			<div className="staffBox">
				<div className="noteList">
					{noteList.map(note => (
						<span key={note.id}>
							{note.label}
							{note.accidentalTag || ''}
						</span>
					))}
				</div>
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
		notesMaster: shapeToStaff(state).reverse(),
		favorSharps: state.ui.favorSharps
	};
};

const mapDispatchToProps = dispatch => ({
	selectNote: (noteObj, favorSharps) => {
		return dispatch(selectNote(noteObj, favorSharps));
	}
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
