import React, { Component } from 'react'
import Tone from 'tone'
import Header from '../header/Header'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'
import Instructions from '../instructions/Instructions'
import './App.css'

const initSynth = { running: false, type: 'sine', partialCount: 2 }

class App extends Component {
	constructor(props) {
		super(props)

		this.state = initSynth

		// TODO -> Move to separate component, and rely on tone getter/setter methods instead of state
		// * Defines tone objs and connects to master
		this.compressor = new Tone.Compressor()
		this.synth = new Tone.PolySynth(20, Tone.Synth, {
			volume: -18,
			oscillator: initSynth
		})
		this.synth.chain(this.compressor, Tone.Master)
	}

	startTone = () => {
		if (this.state.running) {
			return
		}
		Tone.context.resume() // * Not sure this is being done right
		this.setState({ running: true })
	}

	changeOscillator = ({ target: { value } }) => {
		this.setState(state => {
			this.synth.set({
				oscillator: {
					type: value,
					partialCount: state.partialCount
				}
			})

			return { type: value }
		})
	}

	changePartials = ({ target: { value } }) => {
		this.setState(state => {
			this.synth.set({
				oscillator: {
					type: state.type,
					partialCount: value
				}
			})

			return { partialCount: value }
		})
	}

	render() {
		return (
			<div className="appBox" onClick={this.startTone}>
				<Instructions />
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
