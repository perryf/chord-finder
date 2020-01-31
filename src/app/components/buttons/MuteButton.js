import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleMute } from 'app/redux/actions'
import './Buttons.css'

const MuteButton = props => {
	const { mute, toggleMute } = props

	return (
		<div>
			{mute ? (
				<button className="uiButton muteButton pointer" onClick={toggleMute}>
					&#x1f507;
				</button>
			) : (
				<button className="uiButton muteButton pointer" onClick={toggleMute}>
					&#x1f50a;
				</button>
			)}
		</div>
	)
}

MuteButton.propTypes = {
	mute: PropTypes.bool.isRequired,
	toggleMute: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ mute: state.ui.mute })

const mapDispatchToProps = dispatch => ({
	toggleMute: () => dispatch(toggleMute())
})

export default connect(mapStateToProps, mapDispatchToProps)(MuteButton)
