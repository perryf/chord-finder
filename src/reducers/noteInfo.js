import notes from './data/noteInfo'

const initialState = notes

export const noteInfo = (state = initialState, action) => {
	switch (action.type) {
		case 1:
			return state
		case 2:
			return state
		default:
			return state
	}
}
