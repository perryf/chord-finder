import {
	FAVOR_SHARPS,
	FAVOR_FLATS,
	CLEAR_NOTES,
	CHANGE_CHORD_FILTER,
	TOGGLE_ROOT_MATCH
} from 'app/redux/types'

export const favorSharps = () => ({ type: FAVOR_SHARPS })

export const favorFlats = () => ({ type: FAVOR_FLATS })

export const handleClearNotes = () => ({ type: CLEAR_NOTES })

export const changeChordFilter = value => ({
	type: CHANGE_CHORD_FILTER,
	payload: value
})

export const toggleRootMatch = () => ({ type: TOGGLE_ROOT_MATCH })
