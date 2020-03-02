import { SELECT_NOTE, DESELECT_NOTE, CLEAR_NOTES } from 'app/redux/types'

export const selectNote = noteId => ({
	type: SELECT_NOTE,
	payload: { noteId }
})

export const deselectNote = noteId => ({
	type: DESELECT_NOTE,
	payload: { noteId }
})

export const handleClearNotes = () => ({
	type: CLEAR_NOTES
})
