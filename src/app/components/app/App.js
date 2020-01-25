import React from 'react'
import Header from '../Header/Header'
import Staff from '../staff/Staff'
import Keyboard from '../keyboard/Keyboard'
import Controls from '../controls/Controls'
import ChordListing from '../chordListing/ChordListing'
import './App.css'

const App = () => (
	<div className="appBox">
		<Header />
		<div className="appBody">
			<div className="inputs">
				<Controls />
				<Staff />
				<Keyboard />
			</div>
			<ChordListing />
		</div>
	</div>
)

export default App
