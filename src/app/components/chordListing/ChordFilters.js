import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeChordFilter, toggleRootMatch } from 'app/redux/actions'

const ChordFilters = props => {
	const { checkBoxes, rootMatch, changeChordFilter, toggleRootMatch } = props

	const handleClick = ({ target: { value } }) => {
		changeChordFilter(value)
	}

	return (
		<div>
			<div className="onlyRoots">
				<span>Only root matches</span>
				<input
					type="checkbox"
					name="rootMatch"
					value="rootMatch"
					checked={rootMatch}
					onChange={toggleRootMatch}
				/>
			</div>
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
		</div>
	)
}

ChordFilters.propTypes = {
	checkBoxes: PropTypes.object.isRequired,
	rootMatch: PropTypes.bool.isRequired,
	changeChordFilter: PropTypes.func.isRequired,
	toggleRootMatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return { checkBoxes: state.ui.checkBoxes, rootMatch: state.ui.rootMatch }
}

const mapDispatchToProps = dispatch => {
	return {
		changeChordFilter: value => dispatch(changeChordFilter(value)),
		toggleRootMatch: () => dispatch(toggleRootMatch())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChordFilters)
