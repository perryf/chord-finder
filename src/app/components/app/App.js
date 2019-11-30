import React, { Component } from 'react'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'

class App extends Component {
	render() {
		return (
			<div className="app homeBox">
				<h1>Chord Finder</h1>
				<div className="inputs">
					<Controls />
					<Staff />
					<Keyboard />
					<ChordListing />
				</div>
			</div>
		)
	}
}

export default App
