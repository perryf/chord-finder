import React from 'react'
import PropTypes from 'prop-types'

const StaffRow = props => {
	// TODO -> Clean up var assignments
	const { handleSelectNote, note, type, prevSelected } = props

	const isMiddleC = note.notes.natural.id === 'c4'
	const isFlat = note.notes.flat.selected
	const isNatural = note.notes.natural.selected
	const isSharp = note.notes.sharp.selected

	let selectedCount = 0
	if (isFlat) selectedCount = selectedCount + 1
	if (isNatural) selectedCount = selectedCount + 1
	if (isSharp) selectedCount = selectedCount + 1

	let rowWidth = '100%'
	if (isMiddleC) {
		rowWidth = selectedCount > 1 ? `${64 * selectedCount}px` : '48px'
	}

	const noteClass = `noteHead ${prevSelected ? 'prevSelected' : ''} ${
		selectedCount > 1 ? 'multiNote' : ''
	}`

	const accClass = `${
		prevSelected ? 'prevSelectAcc' : 'notPrevSelectAcc'
	} accidental`

	const noteList = Object.keys(note.notes).reduce((acc, n) => {
		return note.notes[n].selected ? acc.concat(note.notes[n].label) : acc
	}, [])

	return (
		<div
			className="staffLineBox staffRow flexRowCenter"
			onClick={() => handleSelectNote(note)}
		>
			{type === 'line' ? (
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
							{selectedCount > 1 && (
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
					<div className="noteListName">{noteList.join(', ')}</div>
				</div>
			) : (
				<div className="staffRow flexRowCenter">
					{isFlat && (
						<div id={note.id} tabIndex={-1} className={noteClass}>
							<span tabIndex={-1} className={`${accClass} flat`}>
								b
							</span>
						</div>
					)}

					{isNatural && (
						<div id={note.id} tabIndex={-1} className={noteClass}>
							{selectedCount > 1 && (
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
					<div className="noteListName">{noteList.join(', ')}</div>
				</div>
			)}
		</div>
	)
}

StaffRow.propTypes = {
	handleSelectNote: PropTypes.func.isRequired,
	note: PropTypes.object.isRequired,
	type: PropTypes.oneOf(['line', 'space']).isRequired,
	prevSelected: PropTypes.bool
}

StaffRow.defaultProps = {
	prevSelected: false
}

export default StaffRow
