import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { shapeToStaff } from 'helperFunctions/transformers';
import { favorSharps, favorFlats } from 'app/redux/actions/ui';
import './Controls.css';

class Controls extends Component {
	render() {
		const {
			notesMaster,
			favorSharps,
			handleFavorSharps,
			handleFavorFlats
		} = this.props;

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
								checked={favorSharps}
								onChange={handleFavorSharps}
							/>
							<span>Sharps</span>
						</div>

						<div className="radioInputBox">
							<input
								type="radio"
								name="sharpsFlat"
								value="flats"
								checked={!favorSharps}
								onChange={handleFavorFlats}
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

Controls.propTypes = {
	notesMaster: PropTypes.array.isRequired,
	favorSharps: PropTypes.bool.isRequired,
	handleFavorSharps: PropTypes.func.isRequired,
	handleFavorFlats: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		notesMaster: shapeToStaff(state).reverse(),
		favorSharps: state.ui.favorSharps
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFavorSharps: () => dispatch(favorSharps()),
		handleFavorFlats: () => dispatch(favorFlats())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
