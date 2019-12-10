import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	favorSharps,
	favorFlats,
	handleClearNotes
} from 'app/redux/actions/uiActions'
import './Controls.css'

class Controls extends Component {
	render() {
		const {
			favorSharps,
			handleFavorSharps,
			handleFavorFlats,
			handleClearNotes
		} = this.props

		return (
			<div className="controlsBox">
				<div className="radioBox">
					<div className="radioInputBox">
						<span className="pointer" onClick={handleFavorSharps}>
							Sharps
						</span>
						<input
							type="radio"
							name="sharpsFlat"
							value="sharps"
							checked={favorSharps}
							onChange={handleFavorSharps}
						/>
					</div>

					<div className="radioInputBox">
						<span className="pointer" onClick={handleFavorFlats}>
							Flats
						</span>
						<input
							type="radio"
							name="sharpsFlat"
							value="flats"
							checked={!favorSharps}
							onChange={handleFavorFlats}
						/>
					</div>
				</div>
				<button className="clearStaffButton" onClick={handleClearNotes}>
					Clear Staff
				</button>
			</div>
		)
	}
}

Controls.propTypes = {
	favorSharps: PropTypes.bool.isRequired,
	handleFavorSharps: PropTypes.func.isRequired,
	handleFavorFlats: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		favorSharps: state.ui.favorSharps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleFavorSharps: () => dispatch(favorSharps()),
		handleFavorFlats: () => dispatch(favorFlats()),
		handleClearNotes: () => dispatch(handleClearNotes())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
