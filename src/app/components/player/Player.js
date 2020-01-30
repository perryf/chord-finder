import React from 'react'
import { connect } from 'react-redux'
import { PolySynth, Compressor, Master } from 'tone'
import { getSelectedNotes, formatNoteId } from 'helperFunctions'
import './Player.css'

const compressor = new Compressor()
const synth = new PolySynth(20).chain(compressor, Master)

const Player = props => {
	const { noteIds } = props

	return (
		<div>
			<button
				className="playButton"
				onClick={() => {
					synth.triggerAttackRelease(noteIds, '8n')
				}}
			>
				Play
			</button>
		</div>
	)
}

const mapStateToProps = ({ notesMaster = {} }) => {
	const selectedNotes = getSelectedNotes(notesMaster)

	return {
		noteIds: selectedNotes.map(n => formatNoteId(n.id))
	}
}

export default connect(mapStateToProps)(Player)
