import { notesMaster as notesMasterData, SELECT_NOTE } from 'data';
import { toggleNoteById } from 'helperFunctions/arrayMapping';

// export const notes = (state = noteData, action) => {
// 	const { type, payload } = action;
// 	switch (type) {
// 		// case SELECT_NOTE:
// 		// 	return toggleNoteById(payload, state, 'value')
// 		default:
// 			return state;
// 	}
// };

export const notesMaster = (state = notesMasterData, action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case SELECT_NOTE:
			return toggleNoteById(state, payload);

		default:
			return state;
	}
};
