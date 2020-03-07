import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleArp } from 'app/redux/actions'

const ArpButton = props => {
	const { buttonName, toggleArp } = props

	return (
		<button className="uiButton arpButton pointer" onClick={toggleArp}>
			{buttonName}
		</button>
	)
}

ArpButton.propTypes = {
	buttonName: PropTypes.string.isRequired,
	toggleArp: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	const { arpeggiate } = state.ui

	let buttonName = 'Arpeggiate fast'
	if (arpeggiate === 'slow') {
		buttonName = 'Arpeggiate slow'
	} else if (arpeggiate === 'block') {
		buttonName = 'Block chord'
	}

	return { buttonName }
}

const mapDispatchToProps = dispatch => ({
	toggleArp: () => dispatch(toggleArp())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArpButton)
