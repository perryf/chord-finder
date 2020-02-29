import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeChordFilter, toggleRootMatch } from 'app/redux/actions'

const ChordFilters = props => {
	const { checkBoxes, rootMatch, changeChordFilter, toggleRootMatch } = props

	return (
		<div className="listingInputs">
			<div className="onlyRoots">
				<span className="pointer" onClick={toggleRootMatch}>
					Root must be in chord
				</span>
				<input
					type="checkbox"
					name="rootMatch"
					value="rootMatch"
					className="pointer"
					checked={rootMatch}
					onChange={toggleRootMatch}
				/>
			</div>

			<div className="checkBoxes">
				<div>
					<span className="pointer" onClick={() => changeChordFilter('basic')}>
						Basic
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="basic"
						className="pointer"
						checked={checkBoxes.basic}
						onChange={() => changeChordFilter('basic')}
					/>
				</div>
				<div>
					<span className="pointer" onClick={() => changeChordFilter('common')}>
						Common
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="common"
						className="pointer"
						checked={checkBoxes.common}
						onChange={() => changeChordFilter('common')}
					/>
				</div>
				<div>
					<span
						className="pointer"
						onClick={() => changeChordFilter('uncommon')}
					>
						Uncommon
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="uncommon"
						className="pointer"
						checked={checkBoxes.uncommon}
						onChange={() => changeChordFilter('uncommon')}
					/>
				</div>
				<div>
					<span className="pointer" onClick={() => changeChordFilter('rare')}>
						Rare
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="rare"
						className="pointer"
						checked={checkBoxes.rare}
						onChange={() => changeChordFilter('rare')}
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

const mapStateToProps = state => ({
	checkBoxes: state.ui.checkBoxes,
	rootMatch: state.ui.rootMatch
})

const mapDispatchToProps = dispatch => ({
	changeChordFilter: value => dispatch(changeChordFilter(value)),
	toggleRootMatch: () => dispatch(toggleRootMatch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChordFilters)
