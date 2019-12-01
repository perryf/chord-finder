import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeChordFilter } from 'app/redux/actions'

const ChordFilters = props => {
	const { checkBoxes, changeChordFilter } = props

	const handleClick = ({ target: { value } }) => {
		changeChordFilter(value)
	}

	return (
		<div className="checkBoxes">
			<div>
				<span>Basic</span>
				<input
					type="checkbox"
					name="chordType"
					value="basic"
					checked={checkBoxes.basic}
					onChange={handleClick}
				/>
			</div>
			<div>
				<span>Common</span>
				<input
					type="checkbox"
					name="chordType"
					value="common"
					checked={checkBoxes.common}
					onChange={handleClick}
				/>
			</div>
			<div>
				<span>Uncommon</span>
				<input
					type="checkbox"
					name="chordType"
					value="uncommon"
					checked={checkBoxes.uncommon}
					onChange={handleClick}
				/>
			</div>
			<div>
				<span>Rare</span>
				<input
					type="checkbox"
					name="chordType"
					value="rare"
					checked={checkBoxes.rare}
					onChange={handleClick}
				/>
			</div>
		</div>
	)
}

ChordFilters.propTypes = {
	changeChordFilter: PropTypes.func.isRequired,
	checkBoxes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return { checkBoxes: state.ui.checkBoxes }
}

const mapDispatchToProps = dispatch => {
	return {
		changeChordFilter: value => dispatch(changeChordFilter(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChordFilters)
