import React from 'react'
import PropTypes from 'prop-types'

const StaffRow = props => {
	const {
		handleSelectNote,
		handleHover,
		note,
		hoverNote,
		type,
		prevSelected
	} = props

	const isMiddleC = note.notes.natural.id === 'c4'
	const isFlat = note.notes.flat.selected
	const isNatural = note.notes.natural.selected
	const isSharp = note.notes.sharp.selected

	// * Used for shifting notes over on staff when displaying multiple notes on a row (i.e. Gb, G, G#)
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
		// TODO -> Clean up hover effect
		<div
			className={`staffLineBox staffRow flexRowCenter ${
				hoverNote === note.id ? 'hovered' : ''
			}`}
			onClick={() => handleSelectNote(note)}
			onMouseEnter={() => handleHover(note)}
			onMouseLeave={() => handleHover(null)}
		>
			{
				// ***** LINE NOTES *****
			}
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
				// ***** SPACE NOTES *****
				<div
					className={`staffRow flexRowCenter ${
						hoverNote === note.id ? 'hovered' : ''
					}`}
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
			)}
		</div>
	)
}

StaffRow.propTypes = {
	note: PropTypes.object.isRequired,
	type: PropTypes.oneOf(['line', 'space']).isRequired,
	prevSelected: PropTypes.bool,
	hoverNote: PropTypes.string,
	handleSelectNote: PropTypes.func.isRequired,
	handleHover: PropTypes.func.isRequired
}

StaffRow.defaultProps = {
	prevSelected: false
}

export default StaffRow
