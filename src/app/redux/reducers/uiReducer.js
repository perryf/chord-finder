import {
	FAVOR_SHARPS,
	FAVOR_FLATS,
	CHANGE_CHORD_FILTER,
	TOGGLE_ROOT_MATCH,
	TOGGLE_MUTE
} from 'app/redux/types'

const initialState = {
	rootMatch: true,
	favorSharps: true,
	checkBoxes: {
		basic: true,
		common: true,
		uncommon: false,
		rare: false
	},
	mute: false
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
		case TOGGLE_ROOT_MATCH:
			return {
				...state,
				rootMatch: !state.rootMatch
			}
		case TOGGLE_MUTE:
			return {
				...state,
				mute: !state.mute
			}
		default:
			return state
	}
}
