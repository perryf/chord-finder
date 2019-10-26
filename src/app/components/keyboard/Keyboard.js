import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote } from '../../actions'

class Keyboard extends Component {
	static propTypes = {
		// prop: PropTypes
	}

	render() {
		return <div>Keyboard</div>
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	}
}

const mapDispatchToProps = dispatch => ({
	selectNote: id => dispatch(selectNote(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Keyboard)
