import React, { Component } from 'react'
import Header from '../Header/Header'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="homeBox">
				<Header />
				<div className="homeBody">
					<div className="inputs">
						<Controls />
						<Staff />
						<Keyboard />
					</div>
					<ChordListing />
				</div>
			</div>
		)
	}
}

export default App
