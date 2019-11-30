import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { notesMaster } from 'data'
import './ChordListing.css'

class ChordListing extends Component {
	static propTypes = {
		notesMaster: PropTypes.object.isRequired
	}

	render() {
		return (
			<div>
				<h2>Chord Listing</h2>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notesMaster: state
	}
}

export default connect(mapStateToProps)(ChordListing)
