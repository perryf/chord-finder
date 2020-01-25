import React from 'react'
import PropTypes from 'prop-types'

const StaffSpace = props => {
	const { handleSelectNote, note, prevSelected } = props

	const selected =
		note.notes.sharp.selected ||
		note.notes.flat.selected ||
		note.notes.natural.selected

	const isSharp = note.notes.sharp.selected
	const isFlat = note.notes.flat.selected

	return (
		<div
			className="staffSpace staffRow flexRowCenter"
			onClick={() => handleSelectNote(note)}
		>
			{selected && (
				<div
					id={note.id}
					tabIndex={-1}
					className={`noteHead ${prevSelected ? 'prevSelected' : ''}`}
				>
					{(isSharp || isFlat) && (
						<span
							tabIndex={-1}
							className={`accidental ${
								prevSelected ? 'prevSelectAcc' : 'notPrevSelectAcc'
							} ${isFlat ? 'flat' : 'sharp'}`}
						>
							{isSharp && '#'}
							{isFlat && 'b'}
						</span>
					)}
				</div>
			)}
		</div>
	)
}

StaffSpace.propTypes = {
	handleSelectNote: PropTypes.func.isRequired,
	note: PropTypes.object.isRequired,
	prevSelected: PropTypes.bool
}

StaffSpace.defaultProps = {
	prevSelected: false
}

export default StaffSpace
