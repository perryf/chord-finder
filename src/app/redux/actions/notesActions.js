import { SELECT_NOTE } from 'app/redux/types';

export const selectNote = (noteObj, favorSharps) => {
	return {
		type: SELECT_NOTE,
		payload: { noteObj, favorSharps }
	};
};
