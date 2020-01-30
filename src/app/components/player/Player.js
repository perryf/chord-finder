import React from 'react'
import { connect } from 'react-redux'
import { PolySynth } from 'tone'
import { getSelectedNotes, formatNoteId } from 'helperFunctions'
import './Player.css'

const synth = new PolySynth().toMaster()

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
