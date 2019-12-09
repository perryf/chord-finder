import React from 'react'
import PropTypes from 'prop-types'

const StaffLine = props => {
	const { handleSelectNote, note, prevSelected } = props

	const selected =
		note.notes.flat.selected ||
		note.notes.sharp.selected ||
		note.notes.natural.selected

	const isSharp = note.notes.sharp.selected
	const isFlat = note.notes.flat.selected
	const isMiddleC = note.notes.natural.id === 'c4'

	return (
		<div
			className="staffLineBox staffRow flexRowCenter"
			onClick={() => handleSelectNote(note)}
		>
			<div
				className={`flexRowCenter ${isMiddleC ? 'staffLineC' : 'staffLine'}`}
			>
				{selected && (
					<div
						id={note.id}
						tabIndex={-1}
						className={`noteHead ${prevSelected ? 'prevSelected' : ''}`}
					>
						<span tabIndex={-1} className="accidental">
							{isSharp && '#'}
							{isFlat && <em>b</em>}
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

StaffLine.propTypes = {
	handleSelectNote: PropTypes.func.isRequired,
	note: PropTypes.object.isRequired,
	prevSelected: PropTypes.bool
}

StaffLine.defaultProps = {
	prevSelected: false
}

export default StaffLine
