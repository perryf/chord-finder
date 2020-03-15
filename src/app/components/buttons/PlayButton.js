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

	playChord = () => {
		const { noteIds = [], mute, arpeggiate, synth, direction } = this.props

		if (!mute && noteIds.length > 0 && !this.state.playing) {
			this.setState({ playing: true })

			// * Arpeggio
			if (arpeggiate === 'fast' || arpeggiate === 'slow') {
				const speed = arpeggiate === 'fast' ? '16n' : '8n'

				let arpNotes = noteIds.slice().reverse()
				if (direction === 'upDown') {
					arpNotes = arpNotes.concat(noteIds.slice(1))
				} else if (direction === 'downUp') {
					arpNotes = noteIds.concat(arpNotes.slice(1))
				}

				const arpLength = arpNotes.length

				let i = 0
				const pattern = new Tone.Pattern(
					(_, note) => {
						i++
						synth.triggerAttackRelease(note, speed)
						if (i === arpLength) {
							pattern.stop()
							Tone.Transport.stop()
							this.setState({ playing: false })
						}
					},
					arpNotes,
					direction
				)

				pattern.iterations = arpLength
				pattern.interval = speed

				pattern.start(0)
				Tone.Transport.start()
				// * Block Chord
			} else {
				synth.triggerAttackRelease(noteIds, '8n')
				this.setState({ playing: false })
			}
		}
	}

	render() {
		const { mute } = this.props

		return (
			<button
				className={`uiButton playButton ${mute ? '' : 'pointer'}`}
				disabled={mute}
				onClick={this.playChord}
			>
				Play
			</button>
		)
	}
}

PlayButton.propTypes = {
	noteIds: PropTypes.array.isRequired,
	arpeggiate: PropTypes.string.isRequired,
	direction: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired
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
		arpeggiate: state.ui.arpeggiate,
		direction: state.ui.direction
	}
}

export default connect(mapStateToProps)(PlayButton)
