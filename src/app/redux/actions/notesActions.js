import { SELECT_NOTE, DESELECT_NOTE } from 'app/redux/types'

export const selectNote = noteId => {
	return {
		type: SELECT_NOTE,
		payload: { noteId }
	}
}

export const deselectNote = noteId => {
	return {
		type: DESELECT_NOTE,
		payload: { noteId }
	}
}
