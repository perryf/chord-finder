// ! Delete if no longer used

import React from 'react'
import PropTypes from 'prop-types'

const StaffLine = props => {
	const { handleSelectNote, note, prevSelected } = props

	const isMiddleC = note.notes.natural.id === 'c4'
	const isFlat = note.notes.flat.selected
	const isNatural = note.notes.natural.selected
	const isSharp = note.notes.sharp.selected
	const selected = isFlat || isNatural || isSharp

	let selectedLength = 0
	if (isFlat) selectedLength = selectedLength + 1
	if (isNatural) selectedLength = selectedLength + 1
	if (isSharp) selectedLength = selectedLength + 1

	let rowWidth = '100%'
	if (isMiddleC) {
		rowWidth = selectedLength > 1 ? `${48 * selectedLength}px` : '48px'
	}

	const noteClass = `noteHead ${
		prevSelected && selectedLength === 1 ? 'prevSelected' : ''
	}`

	const accClass = `${
		prevSelected && selectedLength === 1 ? 'prevSelectAcc' : 'notPrevSelectAcc'
	} accidental`

	return (
		<div
			className="staffLineBox staffRow flexRowCenter"
			onClick={() => handleSelectNote(note)}
		>
			<div
				className={`flexRowCenter ${isMiddleC ? 'staffLineC' : 'staffLine'}`}
				style={{ width: rowWidth }}
			>
				{isFlat && (
					<div id={note.id} tabIndex={-1} className={noteClass}>
						<span tabIndex={-1} className={`${accClass} flat`}>
							b
						</span>
					</div>
				)}

				{isNatural && (
					<div id={note.id} tabIndex={-1} className={noteClass}>
						{selectedLength > 1 && (
							<span tabIndex={-1} className={`${accClass} natural`}>
								♮
							</span>
						)}
					</div>
				)}

				{isSharp && (
					<div id={note.id} tabIndex={-1} className={noteClass}>
						<span tabIndex={-1} className={`${accClass} sharp`}>
							#
						</span>
					</div>
				)}

				{false && selected && (
					<div
						id={note.id}
						tabIndex={-1}
						className={`noteHead ${
							prevSelected && selectedLength === 1 ? 'prevSelected' : ''
						}`}
					>
						<span
							tabIndex={-1}
							className={`accidental ${
								prevSelected && selectedLength === 1
									? 'prevSelectAcc'
									: 'notPrevSelectAcc'
							} ${isFlat ? 'flat' : 'sharp'}`}
						>
							{isSharp && '#'}
							{isFlat && 'b'}
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
