import React, { Component } from 'react'
import Tone from 'tone'
import Header from '../header/Header'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'
import './App.css'

const initSynth = { waveType: 'sine', partialCount: 0 }

class App extends Component {
	constructor(props) {
		super(props)

		// * Defines tone objs and connects to master
		Tone.context.resume()
		this.compressor = new Tone.Compressor()
		this.synth = new Tone.PolySynth(20, Tone.Synth, {
			volume: -18,
			oscillator: initSynth
		})

		this.synth.chain(this.compressor, Tone.Master)
		this.state = initSynth
	}

	changeOscillator = ({ target: { value } }) => {
		this.setState(state => {
			this.synth.set({
				oscillator: {
					type: value,
					partialCount: state.partialCount
				}
			})

			return { waveType: value }
		})
	}

	changePartials = ({ target: { value } }) => {
		this.setState(state => {
			this.synth.set({
				oscillator: {
					type: state.waveType,
					partialCount: value
				}
			})

			return { partialCount: value }
		})
	}

	render() {
		return (
			<div className="appBox">
				<Header />
				<div className="appBody">
					<div className="inputs">
						<Controls
							{...this.state}
							synth={this.synth}
							changeOscillator={this.changeOscillator}
							changePartials={this.changePartials}
						/>
						<Staff synth={this.synth} />
						<Keyboard synth={this.synth} />
					</div>
					<ChordListing synth={this.synth} />
				</div>
			</div>
		)
	}
}

export default App
