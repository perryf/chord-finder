import { types } from 'data'

// * array (propType = array) -> array which you are searching.
// * value (propType = string or number) -> value of item you are finding
// * key (propType = string) -> key of item you are finding
// ? No longer used
// const indexById = (array, value, key = 'value') => {
// 	return array.reduce((acc, obj, index) => {
// 		return obj[key] === value ? index : acc
// 	}, -1)
// }

// // ? No longer used
// export const toggleById = (value, array, key) => {
// 	const index = indexById(array, value, key)
// 	const update = array[index]

// 	return [
// 		...array.slice(0, index),
// 		{ ...update, selected: !update.selected },
// 		...array.slice(index + 1)
// 	]
// }

export const toggleNoteById = (notesState = {}, noteId, selected = true) => {
	let updateKey = ''
	let updateType = ''

	Object.keys(notesState).map(key => {
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
	return Object.keys(notesMaster).reduce((acc, key) => {
		const noteObj = notesMaster[key]
		const accSelect = Object.keys(noteObj).find(accKey => {
			return noteObj[accKey].selected
		})

		return accSelect ? acc.concat(noteObj[accSelect]) : acc
	}, [])
}
