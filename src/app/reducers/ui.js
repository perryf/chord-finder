import { FAVOR_SHARPS } from '../../data'

const initialState = {
	favorSharps: true
}

export const ui = (state = initialState, action) => {
	switch (action.type) {
		case FAVOR_SHARPS:
			return state
		case 2:
			return state
		default:
			return state
	}
}
