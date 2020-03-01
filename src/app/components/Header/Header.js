import React from 'react'
import './Header.css'

const Header = () => (
	<div className="homeHeader">
		<h1 className="mainTitle">Chord Identifier</h1>
		<p>
			<a
				className="cancelLinkStyle madeBy"
				href="https://github.com/perryf/chord-reader"
			>
				Made by Perry
			</a>
		</p>
	</div>
)

export default Header
