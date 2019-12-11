import { staffInfo, allChords, notesData as notesMaster } from 'data'

const badIds = ['eS4', 'fB4', 'bS5', 'cB5', 'eS5', 'fB5']
const notesData = notesMaster.filter(n => {
	return !badIds.includes(n.id)
})

// * Creates Staff Master
export const shapeToStaff = state => {
	// prettier-ignore
	const { c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5 } = state.notesMaster

	return [
		{ id: 'c4', notes: c4, staffInfo: staffInfo.c4 },
		{ id: 'd4', notes: d4, staffInfo: staffInfo.d4 },
		{ id: 'e4', notes: e4, staffInfo: staffInfo.e4 },
		{ id: 'f4', notes: f4, staffInfo: staffInfo.f4 },
		{ id: 'g4', notes: g4, staffInfo: staffInfo.g4 },
		{ id: 'a4', notes: a4, staffInfo: staffInfo.a4 },
		{ id: 'b4', notes: b4, staffInfo: staffInfo.b4 },
		{ id: 'c5', notes: c5, staffInfo: staffInfo.c5 },
		{ id: 'd5', notes: d5, staffInfo: staffInfo.d5 },
		{ id: 'e5', notes: e5, staffInfo: staffInfo.e5 },
		{ id: 'f5', notes: f5, staffInfo: staffInfo.f5 },
		{ id: 'g5', notes: g5, staffInfo: staffInfo.g5 }
	]
}

// * Creates Keys Master
export const shapeToKeys = state => {
	// prettier-ignore
	const { c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5 } = state.notesMaster

	return [
		{ id: 'c4', notes: [c4.natural], value: 0, blackKey: false },
		{ id: 'cS4', notes: [c4.sharp, d4.flat], value: 1, blackKey: true },
		{ id: 'd4', notes: [d4.natural], value: 2, blackKey: false },
		{ id: 'dS4', notes: [d4.sharp, e4.flat], value: 3, blackKey: true },
		{ id: 'e4', notes: [e4.natural, f4.flat], value: 4, blackKey: false },
		{ id: 'f4', notes: [f4.natural, e4.sharp], value: 5, blackKey: false },
		{ id: 'fS4', notes: [f4.sharp, g4.flat], value: 6, blackKey: true },
		{ id: 'g4', notes: [g4.natural], value: 7, blackKey: false },
		{ id: 'gS4', notes: [g4.sharp, a4.flat], value: 8, blackKey: true },
		{ id: 'a4', notes: [a4.natural], value: 9, blackKey: false },
		{ id: 'aS4', notes: [a4.sharp, b4.flat], value: 10, blackKey: true },
		{ id: 'b4', notes: [b4.natural, c5.flat], value: 11, blackKey: false },
		{ id: 'c5', notes: [c5.natural, b4.sharp], value: 12, blackKey: false },
		{ id: 'cS5', notes: [c5.sharp, d5.flat], value: 13, blackKey: true },
		{ id: 'd5', notes: [d5.natural], value: 14, blackKey: false },
		{ id: 'dS5', notes: [d5.sharp, e5.flat], value: 15, blackKey: true },
		{ id: 'e5', notes: [e5.natural, f5.flat], value: 16, blackKey: false },
		{ id: 'f5', notes: [f5.natural, e5.sharp], value: 17, blackKey: false },
		{ id: 'fS5', notes: [f5.sharp, g5.flat], value: 18, blackKey: true },
		{ id: 'g5', notes: [g5.natural], value: 19, blackKey: false }
	]
}

// TODO -> combine with filter
// * Matches input with all chords in a key
// * noteArr (array of objects) - Input of notes
// * chord (object, chord.note is array of note values ) - individual chord
const chordMatcher = (noteArr, chord) => {
	if (noteArr.length === 0) {
		return
	}

	// * Main matching function
	const isMatch = noteArr.every(inputNote => {
		return chord.notes.some(note => note === inputNote.absoluteValue)
	})

	const perfectMatch =
		isMatch &&
		noteArr.length === chord.notes.length &&
		chord.notes.every(note => {
			return noteArr.some(inputNote => note === inputNote.absoluteValue)
		})

	const rootMatch = noteArr.some(inputNote => {
		return inputNote.absoluteValue === chord.notes[0]
	})

	return isMatch ? { ...chord, perfectMatch, rootMatch } : null
}

export const getMatchingChords = noteArr => {
	// * Eliminates duplicates
	const shapedArr = noteArr.reduce((acc, note, i, self) => {
		const duplicate = self.find(n => {
			return n.absoluteValue === note.absoluteValue && n.value !== note.value
		})

		if (duplicate) {
			return acc.find(n => n.absoluteValue === duplicate.absoluteValue)
				? acc
				: acc.concat(note)
		} else {
			return acc.concat(note)
		}
	}, [])

	let matchingChords = []

	// * Transpose
	for (let i = 0; i < 12; i++) {
		const noteMatch = notesData.find(note => note.value === i)

		const shapedChords = allChords
			.map(chord => ({
				...chord,
				notes: chord.notes.map(n => {
					const newVal = n + i
					return newVal < 12 ? newVal : newVal - 12
				})
			}))
			.map(chord => chordMatcher(shapedArr, chord))
			.filter(c => c)

		const update = {
			id: noteMatch.id,
			noteInfo: noteMatch,
			chords: shapedChords
		}

		matchingChords = matchingChords.concat(update)
	}

	return matchingChords
}

export const getNoteValueById = id => {
	const value = notesData.reduce((acc, n) => {
		return n.id === id ? n.absoluteValue : acc
	}, -1)
	return value
}

export const getNoteByValue = (value, favorSharps) => {
	const noteName = notesData.reduce((acc, n) => {
		const type = favorSharps ? 'sharp' : 'flat'

		return n.value === value && (n.type === type || n.type === 'natural')
			? n.label
			: acc
	}, '')

	return noteName
}
