import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Controls.css'

class Controls extends Component {
	render() {
		const { notes } = this.props
		return (
			<div>
				<h2>Controls</h2>
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

					<div className="noteList">
						{notes.map(note => (
							<span key={note.id}>
								{note.label}
								{note.accidentalTag || ''}
							</span>
						))}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes.reverse()
	}
}

const mapDispatchToProps = state => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)
