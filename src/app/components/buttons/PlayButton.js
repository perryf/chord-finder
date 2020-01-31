import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { PolySynth, Compressor, Master } from 'tone'
import { getSelectedNotes, formatNoteId } from 'helperFunctions'
import './Buttons.css'

const compressor = new Compressor()
const synth = new PolySynth(20).chain(compressor, Master)

const PlayButton = props => {
	const { noteIds, mute } = props

	return (
		<button
			className={`uiButton playButton ${mute ? '' : 'pointer'}`}
			disabled={mute}
			onClick={() => {
				synth.triggerAttackRelease(noteIds, '8n')
			}}
		>
			Play
		</button>
	)
}

PlayButton.propTypes = {
	noteIds: PropTypes.array.isRequired,
	mute: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
	const selectedNotes = getSelectedNotes(state.notesMaster)

	return {
		noteIds: selectedNotes.map(n => formatNoteId(n.id)),
		mute: state.ui.mute
	}
}

export default connect(mapStateToProps)(PlayButton)
