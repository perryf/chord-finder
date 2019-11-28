import { notesMaster as notesMasterData } from 'data';
import { SELECT_NOTE, CLEAR_NOTES } from 'app/redux/types';
import { toggleNoteById } from 'helperFunctions/arrayMapping';

export const notesMaster = (state = notesMasterData, action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case SELECT_NOTE:
			return toggleNoteById(state, payload.noteObj, payload.favorSharps);
		case CLEAR_NOTES:
			return notesMasterData;
		default:
			return state;
	}
};
