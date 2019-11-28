import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectNote } from 'app/redux/actions';
import { shapeToKeys } from 'helperFunctions/transformers';
import './Keyboard.css';

class Keyboard extends Component {
	static propTypes = {
		favorSharps: PropTypes.bool.isRequired,
		notesMaster: PropTypes.array.isRequired,
		selectNote: PropTypes.func.isRequired
	};

	selectNoteIntercept = noteObj => {
		console.log(noteObj);
		const { favorSharps } = this.props;
		// this.props.selectNote(noteObj, favorSharps);
	};

	render() {
		const { notesMaster } = this.props;

		return (
			<div className="keyboardWhole">
				<div className="keyboardBox">
					{notesMaster.map(noteObj => {
						const selected = noteObj.notes.find(note => note.selected);
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
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notesMaster: shapeToKeys(state),
		favorSharps: state.ui.favorSharps,
		selectNote: PropTypes.func.isRequired
	};
};

const mapDispatchToProps = dispatch => ({
	selectNote: (noteObj, favorSharps) => {
		return dispatch(selectNote(noteObj, favorSharps));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
