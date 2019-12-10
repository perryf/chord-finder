import { types } from 'data'

export const toggleNoteById = (notesState = {}, noteId, selected = true) => {
	let updateKey = ''
	let updateType = ''

	Object.keys(notesState).forEach(key => {
		types.forEach(type => {
			if (notesState[key][type].id === noteId) {
				updateKey = key
				updateType = type
			}
		})
	})

	return {
		...notesState,
		[updateKey]: {
			...notesState[updateKey],
			[updateType]: {
				...notesState[updateKey][updateType],
				selected
			}
		}
	}
}

export const getSelectedNotes = (notesMaster = {}) => {
	const selectedNotes = Object.keys(notesMaster).reduce((acc, key) => {
		const noteObj = notesMaster[key]
		let accidentalSelect = []

		Object.keys(noteObj).forEach(accKey => {
			if (noteObj[accKey].selected) {
				accidentalSelect = accidentalSelect.concat(noteObj[accKey])
			}
		})

		return accidentalSelect.length > 0 ? acc.concat(accidentalSelect) : acc
	}, [])

	return selectedNotes
}
