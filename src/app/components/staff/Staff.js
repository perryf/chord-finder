import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote } from '../../actions'

class Staff extends Component {
	static propTypes = {
		// prop: PropTypes
	}

	componentWillMount() {
		console.log(this.props.notes)
		this.props.selectNote('c4')
	}

	render() {
		console.log(this.props.notes)
		return <div>Staff</div>
	}
}

const mapStateToProps = state => {
	return { notes: state.notes }
}

const mapDispatchToProps = dispatch => ({
	selectNote: id => dispatch(selectNote(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Staff)
