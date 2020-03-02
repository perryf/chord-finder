import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Tone from 'tone'
import { getSelectedNotes, formatNoteId } from 'helperFunctions'
import './Buttons.css'

class PlayButton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false
		}
	}

	render() {
		const { noteIds = [], mute, arpeggiate, synth } = this.props

		const playChord = () => {
			if (!mute && noteIds.length > 0 && !this.state.playing) {
				this.setState({ playing: true })
				// * Arpeggio
				if (arpeggiate) {
					let i = 0
					const pattern = new Tone.Pattern(
						(_, note) => {
							i++
							synth.triggerAttackRelease(note, '16n')
							if (i === noteIds.length) {
								pattern.stop()
								Tone.Transport.stop()
								this.setState({ playing: false })
							}
						},
						noteIds,
						'down'
					)

					pattern.iterations = noteIds.length
					pattern.interval = '16n'

					pattern.start(0)
					Tone.Transport.start()
					// * Block Chord
				} else {
					synth.triggerAttackRelease(noteIds, '8n')
					this.setState({ playing: false })
				}
			}
		}

		return (
			<button
				className={`uiButton playButton ${mute ? '' : 'pointer'}`}
				disabled={mute}
				onClick={playChord}
			>
				Play
			</button>
		)
	}
}

PlayButton.propTypes = {
	noteIds: PropTypes.array.isRequired,
	mute: PropTypes.bool.isRequired,
	arpeggiate: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
	const notes = getSelectedNotes(state.notesMaster)

	// * Filters out dups
	const noteVals = []
	const selectedNotes = notes
		.filter(n => {
			if (!noteVals.includes(n.value)) {
				noteVals.push(n.value)
				return true
			} else {
				return false
			}
		})
		.map(n => formatNoteId(n.id))
		.reverse()

	return {
		noteIds: selectedNotes,
		mute: state.ui.mute,
		arpeggiate: state.ui.arpeggiate
	}
}

export default connect(mapStateToProps)(PlayButton)
