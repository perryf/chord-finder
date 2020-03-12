import {
	FAVOR_SHARPS,
	FAVOR_FLATS,
	CHANGE_CHORD_FILTER,
	TOGGLE_ROOT_MATCH,
	TOGGLE_MUTE,
	TOGGLE_ARP,
	HOVER_NOTE,
	TOGGLE_INSTRUCTIONS,
	CHANGE_DIRECTION
} from 'app/redux/types'

export const favorSharps = () => ({ type: FAVOR_SHARPS })

export const favorFlats = () => ({ type: FAVOR_FLATS })

export const changeChordFilter = value => ({
	type: CHANGE_CHORD_FILTER,
	payload: value
})

export const toggleRootMatch = () => ({ type: TOGGLE_ROOT_MATCH })

export const toggleMute = () => ({ type: TOGGLE_MUTE })

export const toggleArp = () => ({ type: TOGGLE_ARP })

export const handleHoverNote = noteId => ({
	type: HOVER_NOTE,
	payload: { noteId }
})

export const toggleInstructions = () => ({
	type: TOGGLE_INSTRUCTIONS
})

export const changeDirection = direction => ({
	type: CHANGE_DIRECTION,
	payload: direction
})
