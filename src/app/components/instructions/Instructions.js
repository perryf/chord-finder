import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleInstructions } from 'app/redux/actions'
import './Instructions.css'

class Instructions extends Component {
	render() {
		const { showInstructions, toggleInstructions } = this.props

		return (
			<div
				className={`instructionsBox ${
					showInstructions ? 'instructionsShow' : 'instructionsHide'
				}`}
			>
				<h4 className="instructionsWelcome">Welcome to chord finder!</h4>
				<ul>
					<li>
						Click on the staff or the keyboard to play a note and add it to the
						chord. Staff and keyboard are linked together.
					</li>
					<li>
						Clicking on the same note again on the staff will create an
						accidental, and clicking again will remove the note
					</li>
					<li>
						See the list of possible chords to determine what your chord might
						be, a red chord means an exact match
					</li>
					<li>
						Hover over the chord names to see more detail about the chord. Click
						on the chord name to hear what the chord sounds like
					</li>
					<li>
						The filters at the top of the chord listings can help you narrow or
						expand your search
					</li>
					<li>
						In the control panel, you can change the instrument, mute the notes,
						toggle from sharps to flats, or have the chord played as a block or
						an arpeggio
					</li>
					<button
						className="uiButton instructionsButton closeButton pointer"
						onClick={toggleInstructions}
					>
						Close
					</button>
				</ul>
			</div>
		)
	}
}

Instructions.propTypes = {
	showInstructions: PropTypes.bool.isRequired,
	toggleInstructions: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	showInstructions: state.ui.showInstructions
})

const mapDispatchToProps = dispatch => ({
	toggleInstructions: () => dispatch(toggleInstructions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Instructions)
