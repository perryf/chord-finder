import { notesMaster as notesMasterData } from 'data'
import { SELECT_NOTE, DESELECT_NOTE, CLEAR_NOTES } from 'app/redux/types'
import { toggleNoteById } from 'helperFunctions'

export const notesMaster = (state = notesMasterData, action = {}) => {
	const { type, payload } = action
	switch (type) {
		case SELECT_NOTE:
			return toggleNoteById(state, payload.noteId, true)
		case DESELECT_NOTE:
			return toggleNoteById(state, payload.noteId, false)
		case CLEAR_NOTES:
			return notesMasterData
		default:
			return state
	}
}
