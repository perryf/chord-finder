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
					<span role="img" aria-label="mute">
						&#x1f507;
					</span>
				</button>
			) : (
				<button className="uiButton muteButton pointer" onClick={toggleMute}>
					<span role="img" aria-label="unmute">
						&#x1f50a;
					</span>
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
