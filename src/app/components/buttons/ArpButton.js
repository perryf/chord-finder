import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleArp } from 'app/redux/actions'

const ArpButton = props => {
	const { arpeggiate, toggleArp } = props

	return (
		<button className="uiButton arpButton pointer" onClick={toggleArp}>
			{arpeggiate ? 'Arpeggio On' : 'Arpeggio Off'}
		</button>
	)
}

ArpButton.propTypes = {
	arpeggiate: PropTypes.bool.isRequired,
	toggleArp: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	arpeggiate: state.ui.arpeggiate
})

const mapDispatchToProps = dispatch => ({
	toggleArp: () => dispatch(toggleArp())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArpButton)
