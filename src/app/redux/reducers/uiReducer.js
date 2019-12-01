import { FAVOR_SHARPS, FAVOR_FLATS, CHANGE_CHORD_FILTER } from 'app/redux/types'

const initialState = {
	favorSharps: true,
	checkBoxes: {
		basic: true,
		common: true,
		uncommon: true,
		rare: false
	}
}

export const ui = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case FAVOR_SHARPS:
			return { ...state, favorSharps: true }
		case FAVOR_FLATS:
			return { ...state, favorSharps: false }
		case CHANGE_CHORD_FILTER:
			return {
				...state,
				checkBoxes: {
					...state.checkBoxes,
					[payload]: !state.checkBoxes[payload]
				}
			}
		default:
			return state
	}
}
