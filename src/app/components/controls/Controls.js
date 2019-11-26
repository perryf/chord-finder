import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { shapeToStaff } from 'helperFunctions/transformers';
import './Controls.css';

class Controls extends Component {
	render() {
		const { notesMaster } = this.props;
		return (
			<div>
				<div className="controls">
					<button className="clearStaffButton" onClick={this.handleClearAll}>
						Clear Staff
					</button>
					<div className="radioBox">
						<div className="radioInputBox">
							<input
								type="radio"
								name="sharpsFlat"
								value="sharps"
								// checked={!!favorSharps}
								onChange={() => {}}
							/>
							<span>Sharps</span>
						</div>

						<div className="radioInputBox">
							<input
								type="radio"
								name="sharpsFlat"
								value="flats"
								// checked={!favorSharps}
								onChange={() => {}}
							/>
							<span>Flats</span>
						</div>
					</div>

					{false && (
						<div className="noteList">
							{notesMaster.map(note => (
								<span key={note.id}>
									{note.label}
									{note.accidentalTag || ''}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notesMaster: shapeToStaff(state).reverse()
	};
};

const mapDispatchToProps = state => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
