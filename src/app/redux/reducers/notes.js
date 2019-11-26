import { notesMaster as notesMasterData, SELECT_NOTE } from 'data';
import { toggleNoteById } from 'helperFunctions/arrayMapping';

export const notesMaster = (state = notesMasterData, action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case SELECT_NOTE:
			return toggleNoteById(state, payload.noteObj, payload.favorSharps);

		default:
			return state;
	}
};
