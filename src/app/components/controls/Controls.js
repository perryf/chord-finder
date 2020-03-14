import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	favorSharps,
	favorFlats,
	handleClearNotes,
	toggleInstructions,
	changeDirection
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
	arpDirectionHover: false,
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
			direction,
			synth,
			partialCount,
			type,
			handleFavorSharps,
			handleFavorFlats,
			handleClearNotes,
			toggleInstructions,
			changePartials,
			changeDirection,
			changeOscillator
		} = this.props
		const {
			sharpsHover,
			flatsHover,
			instrumentHover,
			arpDirectionHover,
			partialsHover,
			muteHover,
			clearHover,
			arpHover,
			playHover
		} = this.state

		// TODO -> Clean up class styling

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
					<div className="radioInputBox relative">
						<span
							className={`filterHover hoverLow ${
								sharpsHover ? 'filterVisible' : 'filterInvisible'
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Favor sharps when selecting notes
						</span>
						<span
							className="pointer"
							onClick={handleFavorSharps}
							onMouseEnter={() => this.handleHover('sharps')}
							onMouseLeave={this.handleUnhover}
						>
							Sharps
						</span>
						<input
							onMouseEnter={() => this.handleHover('sharps')}
							onMouseLeave={this.handleUnhover}
							type="radio"
							name="sharpsFlat"
							value="sharps"
							className="pointer"
							checked={favorSharps}
							onChange={handleFavorSharps}
						/>
					</div>

					<div className="radioInputBox relative">
						<span
							className={`filterHover hoverLow ${
								flatsHover ? 'filterVisible' : 'filterInvisible'
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Favor flats when selecting notes
						</span>
						<span
							className="pointer"
							onClick={handleFavorFlats}
							onMouseEnter={() => this.handleHover('flats')}
							onMouseLeave={this.handleUnhover}
						>
							Flats
						</span>
						<input
							type="radio"
							name="sharpsFlat"
							value="flats"
							className="pointer"
							checked={!favorSharps}
							onChange={handleFavorFlats}
							onMouseEnter={() => this.handleHover('flats')}
							onMouseLeave={this.handleUnhover}
						/>
					</div>
				</div>

				{
					// ***** PLAYBACK OPTIONS *****
				}
				<div className="instrumentControls">
					<div className="relative">
						<span
							className={`filterHover defaultCursor hoverLow ${
								instrumentHover ? 'filterVisible' : 'filterInvisible'
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Select wave type (tone) when playing notes and chords
						</span>
						<div className="flexColumn">
							<span
								className="dropdownLabel"
								onMouseEnter={() => this.handleHover('instrument')}
								onMouseLeave={this.handleUnhover}
							>
								Wave
							</span>
							<select
								name="type"
								value={type}
								onChange={changeOscillator}
								onMouseEnter={() => this.handleHover('instrument')}
								onMouseLeave={this.handleUnhover}
							>
								<option value="sine">Sine</option>
								<option value="square">Square</option>
								<option value="triangle">Triangle</option>
								<option value="sawtooth">SawTooth</option>
							</select>
						</div>
					</div>

					<div className="relative">
						<span
							className={`filterHover defaultCursor hoverLow ${
								arpDirectionHover ? 'filterVisible' : 'filterInvisible'
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Change style arpeggio plays in
						</span>
						<div className="flexColumn">
							<span
								className="dropdownLabel"
								onMouseEnter={() => this.handleHover('arpDirection')}
								onMouseLeave={this.handleUnhover}
							>
								Arpeggio style
							</span>
							<select
								name="type"
								onMouseEnter={() => this.handleHover('arpDirection')}
								onMouseLeave={this.handleUnhover}
								value={direction}
								onChange={e => changeDirection(e.target.value)}
							>
								<option value="up">Up</option>
								<option value="down">Down</option>
								<option value="alternateUp">Alternate Up</option>
								<option value="alternateDown">Alternate Down</option>
								<option value="randomOnce">Random</option>
								{false && <option value="upDown">Up Down</option> // ? Not working?
								}
								{false && <option value="downUp">Down Up</option> // ? Not working?
								}
							</select>
						</div>
					</div>

					<div className="relative">
						<span
							className={`filterHover defaultCursor hoverPartials ${
								partialsHover ? 'filterVisible' : 'filterInvisible'
							}`}
							onMouseEnter={this.handleUnhover}
						>
							Select number of partials (overtones) of instrument.
							<br />
							Smaller numbers give a purer more hallow sound. Larger numbers
							give a richer more nasally sound
						</span>
						<div className="flexColumn">
							<span
								className="dropdownLabel"
								onMouseEnter={() => this.handleHover('partials')}
								onMouseLeave={this.handleUnhover}
							>
								Partials
							</span>
							<select
								name="partialCount"
								value={partialCount}
								onChange={changePartials}
								onMouseEnter={() => this.handleHover('partials')}
								onMouseLeave={this.handleUnhover}
							>
								{partials.map(p => (
									<option key={p}>{p}</option>
								))}
							</select>
						</div>
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
							className={`filterHover defaultCursor hoverHigh ${
								muteHover ? 'filterVisible' : 'filterInvisible'
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
							className={`filterHover defaultCursor hoverHigh ${
								clearHover ? 'filterVisible' : 'filterInvisible'
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
							className={`filterHover defaultCursor hoverHigh ${
								arpHover ? 'filterVisible' : 'filterInvisible'
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
							className={`filterHover defaultCursor hoverHigh ${
								playHover ? 'filterVisible' : 'filterInvisible'
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
	direction: PropTypes.string.isRequired,
	handleFavorSharps: PropTypes.func.isRequired,
	handleFavorFlats: PropTypes.func.isRequired,
	handleClearNotes: PropTypes.func.isRequired,
	toggleInstructions: PropTypes.func.isRequired,
	changeOscillator: PropTypes.func.isRequired,
	changePartials: PropTypes.func.isRequired,
	changeDirection: PropTypes.func.isRequired,
	partialCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
	favorSharps: state.ui.favorSharps,
	direction: state.ui.direction
})

const mapDispatchToProps = dispatch => ({
	handleFavorSharps: () => dispatch(favorSharps()),
	handleFavorFlats: () => dispatch(favorFlats()),
	handleClearNotes: () => dispatch(handleClearNotes()),
	toggleInstructions: () => dispatch(toggleInstructions()),
	changeDirection: value => dispatch(changeDirection(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
