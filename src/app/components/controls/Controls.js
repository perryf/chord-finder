import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	favorSharps,
	favorFlats,
	handleClearNotes,
	toggleInstructions
} from 'app/redux/actions'
import PlayButton from '../buttons/PlayButton'
import MuteButton from '../buttons/MuteButton'
import ArpButton from '../buttons/ArpButton'
import './Controls.css'

const Controls = props => {
	const {
		favorSharps,
		handleFavorSharps,
		handleFavorFlats,
		handleClearNotes,
		toggleInstructions,
		changePartials,
		changeOscillator,
		synth,
		partialCount,
		type
	} = props

	return (
		<div className="controlsBox">
			<div className="instructionsButtonBox">
				<button
					className="uiButton instructionsButton pointer"
					onClick={toggleInstructions}
				>
					Instructions
				</button>
			</div>
			<div className="radioBox">
				<div className="radioInputBox">
					<span className="pointer" onClick={handleFavorSharps}>
						Sharps
					</span>
					<input
						type="radio"
						name="sharpsFlat"
						value="sharps"
						className="pointer"
						checked={favorSharps}
						onChange={handleFavorSharps}
					/>
				</div>

				<div className="radioInputBox">
					<span className="pointer" onClick={handleFavorFlats}>
						Flats
					</span>
					<input
						type="radio"
						name="sharpsFlat"
						value="flats"
						className="pointer"
						checked={!favorSharps}
						onChange={handleFavorFlats}
					/>
				</div>
			</div>

			<div className="instrumentControls">
				<div>
					<span className="dropdownLabel">Wave</span>
					<select name="type" value={type} onChange={changeOscillator}>
						<option value="sine">Sine</option>
						<option value="square">Square</option>
						<option value="triangle">Triangle</option>
						<option value="sawtooth">SawTooth</option>
					</select>
				</div>

				<div>
					<span className="dropdownLabel">Partials</span>
					<select
						name="partialCount"
						value={partialCount}
						onChange={changePartials}
					>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
				</div>
			</div>

			<div className="flexRow justifyAround">
				<MuteButton />
				<button
					className="uiButton clearStaffButton pointer"
					onClick={handleClearNotes}
				>
					Clear Staff
				</button>
				<ArpButton />
				<PlayButton synth={synth} />
			</div>
		</div>
	)
}

Controls.propTypes = {
	synth: PropTypes.object.isRequired,
	favorSharps: PropTypes.bool.isRequired,
	handleFavorSharps: PropTypes.func.isRequired,
	handleFavorFlats: PropTypes.func.isRequired,
	handleClearNotes: PropTypes.func.isRequired,
	toggleInstructions: PropTypes.func.isRequired,
	changeOscillator: PropTypes.func.isRequired,
	changePartials: PropTypes.func.isRequired,
	partialCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.string.isRequired
}

const mapStateToProps = state => ({ favorSharps: state.ui.favorSharps })

const mapDispatchToProps = dispatch => ({
	handleFavorSharps: () => dispatch(favorSharps()),
	handleFavorFlats: () => dispatch(favorFlats()),
	handleClearNotes: () => dispatch(handleClearNotes()),
	toggleInstructions: () => dispatch(toggleInstructions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
