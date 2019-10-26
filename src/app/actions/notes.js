import { SELECT_NOTE } from '../../data'

export const selectNote = id => {
	return {
		type: SELECT_NOTE,
		payload: id
	}
}
