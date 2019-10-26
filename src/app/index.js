import React, { Component } from 'react'
import Staff from './components/staff/Staff'
import Keyboard from './components/keyboard/Keyboard'

class App extends Component {
	render() {
		return (
			<div>
				<h1>Chord Finder</h1>
				<Staff />
				<Keyboard />
			</div>
		)
	}
}

export default App
