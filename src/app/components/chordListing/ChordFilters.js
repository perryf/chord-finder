import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeChordFilter, toggleRootMatch } from 'app/redux/actions'
import './ChordFilters.css'

const initState = {
	rootHover: false,
	basicHover: false,
	commonHover: false,
	uncommonHover: false,
	rareHover: false
}

class ChordFilters extends Component {
	constructor(props) {
		super(props)
		this.state = initState
	}

	handleHover = name => {
		this.setState({
			[`${name}Hover`]: true
		})
	}

	handleUnhover = () => {
		this.setState(initState)
	}

	render() {
		const {
			checkBoxes,
			rootMatch,
			changeChordFilter,
			toggleRootMatch
		} = this.props
		const {
			rootHover,
			basicHover,
			commonHover,
			uncommonHover,
			rareHover
		} = this.state

		return (
			<div className="listingInputs">
				<div
					className="onlyRoots"
					onMouseEnter={() => this.handleHover('root')}
					onMouseLeave={this.handleUnhover}
				>
					<span
						className={`filterHover hoverLow ${
							rootHover ? 'filterVisible' : ''
						}`}
					>
						Only show chord if the root of the chord is in the selected notes
					</span>
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
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('basic')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								basicHover ? 'filterVisible' : ''
							}`}
						>
							Show basic chords
							<br />
							(major, minor, sus, basic 7ths)
						</span>
						<span
							className="pointer"
							onClick={() => changeChordFilter('basic')}
						>
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
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('common')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								commonHover ? 'filterVisible' : ''
							}`}
						>
							Show common chords
							<br />
							(7ths, 6ths, 9ths, sus7, etc)
						</span>
						<span
							className="pointer"
							onClick={() => changeChordFilter('common')}
						>
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
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('uncommon')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								uncommonHover ? 'filterVisible' : ''
							}`}
						>
							Show uncommon chords, mostly used in jazz and modern classical
							<br />
							(9ths, 11ths, 13ths, etc )
						</span>
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
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('rare')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								rareHover ? 'filterVisible' : ''
							}`}
						>
							Show chords not typically used
							<br />
							(aug 7ths, sus major 7ths, etc)
						</span>
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
