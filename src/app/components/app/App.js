import React, { Component } from 'react'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import { notesMaster } from '../../../data'

class App extends Component {
	render() {
		return (
			<div className="app homeBox">
				<h1>Chord Finder</h1>
				<div className="inputs">
					<Controls />
					<Staff />
					<Keyboard />
				</div>
			</div>
		)
	}
}

export default App
