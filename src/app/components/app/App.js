import React, { Component } from 'react'
import Tone from 'tone'
import Header from '../header/Header'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		Tone.context.resume()
		const compressor = new Tone.Compressor()
		this.synth = new Tone.PolySynth({ volume: -12 }).chain(
			compressor,
			Tone.Master
		)
	}

	render() {
		return (
			<div className="appBox">
				<Header />
				<div className="appBody">
					<div className="inputs">
						<Controls />
						<Staff synth={this.synth} />
						<Keyboard synth={this.synth} />
					</div>
					<ChordListing />
				</div>
			</div>
		)
	}
}

export default App
