import { FAVOR_SHARPS, FAVOR_FLATS } from 'data'

const initialState = {
	favorSharps: true
}

export const ui = (state = initialState, action) => {
	switch (action.type) {
		case FAVOR_SHARPS:
			return state
		case FAVOR_FLATS:
			return state
		default:
			return state
	}
}
