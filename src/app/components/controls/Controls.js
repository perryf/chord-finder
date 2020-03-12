import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	favorSharps,
	favorFlats,
	handleClearNotes,
	toggleInstructions
} from 'app/redux/actions'
import { partials } from 'data'
import PlayButton from '../buttons/PlayButton'
import MuteButton from '../buttons/MuteButton'
import ArpButton from '../buttons/ArpButton'
import './Controls.css'

const initState = {
	sharpsHover: false,
	flatsHover: false,
	instrumentHover: false,
	partialsHover: false,
	muteHover: false,
	clearHover: false,
	arpHover: false,
	playHover: false
}

class Controls extends Component {
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
		} = this.props
		const {
			sharpsHover,
			flatsHover,
			instrumentHover,
			partialsHover,
			muteHover,
			clearHover,
			arpHover,
			playHover
		} = this.state

		return (
			<div className="controlsBox">
				<button
					className="uiButton instructionsButton pointer"
					onClick={toggleInstructions}
					onMouseEnter={() => this.handleHover('instructions')}
					onMouseLeave={this.handleUnhover}
				>
					Instructions
				</button>

				{
					// ***** SHARPS VS FLATS *****
				}
				<div className="radioBox">
					<div
						className="radioInputBox relative"
						onMouseEnter={() => this.handleHover('sharps')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								sharpsHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Favor sharps when selecting notes
						</span>
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

					<div
						className="radioInputBox relative"
						onMouseEnter={() => this.handleHover('flats')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover hoverLow ${
								flatsHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Favor flats when selecting notes
						</span>
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

				{
					// ***** PLAYBACK OPTIONS *****
				}
				<div className="instrumentControls">
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('instrument')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverLow ${
								instrumentHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Select wave type (tone) when playing notes and chords
						</span>
						<span className="dropdownLabel">Wave</span>
						<select name="type" value={type} onChange={changeOscillator}>
							<option value="sine">Sine</option>
							<option value="square">Square</option>
							<option value="triangle">Triangle</option>
							<option value="sawtooth">SawTooth</option>
						</select>
					</div>

					<div
						className="relative"
						onMouseEnter={() => this.handleHover('partials')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverPartials ${
								partialsHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Select number of partials (overtones) of instrument.
							<br />
							Smaller numbers give a purer more hallow sound. Larger numbers
							give a richer more nasally sound
						</span>
						<span className="dropdownLabel">Partials</span>
						<select
							name="partialCount"
							value={partialCount}
							onChange={changePartials}
						>
							{partials.map(p => (
								<option key={p}>{p}</option>
							))}
						</select>
					</div>
				</div>

				{
					// ***** BUTTONS *****
				}
				<div className="flexRow justifyAround">
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('mute')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverHigh ${
								muteHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Mute all sounds
						</span>
						<MuteButton />
					</div>
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('clear')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverHigh ${
								clearHover ? 'filterVisible' : ''
							}`}
						>
							Clear all notes on staff and keyboard
						</span>
						<button
							className="uiButton clearStaffButton pointer"
							onClick={handleClearNotes}
						>
							Clear
						</button>
					</div>
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('arp')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverHigh ${
								arpHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Change playback from fast arpeggio, slow arpeggio, and block chord
						</span>
						<ArpButton />
					</div>
					<div
						className="relative"
						onMouseEnter={() => this.handleHover('play')}
						onMouseLeave={this.handleUnhover}
					>
						<span
							className={`filterHover defaultCurs hoverHigh ${
								playHover ? 'filterVisible' : ''
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Play selected notes
						</span>
						<PlayButton synth={synth} />
					</div>
				</div>
			</div>
		)
	}
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
