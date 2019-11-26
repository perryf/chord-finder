import { SELECT_NOTE } from 'data';

export const selectNote = (noteObj, favorSharps) => {
	return {
		type: SELECT_NOTE,
		payload: { noteObj, favorSharps }
	};
};
