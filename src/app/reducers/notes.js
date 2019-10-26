import { notes as noteData } from '../../data'
import { SELECT_NOTE } from '../../data'
import { toggleNoteById } from '../../helperFunctions'

export const notes = (state = noteData, action) => {
	const { type, payload } = action
	switch (type) {
		case SELECT_NOTE:
			return toggleNoteById(payload, state, 'id')
		default:
			return state
	}
}
