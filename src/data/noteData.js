// * Example of object used in notesData
const exampleNotesData = {
	id: 'c4', // * String - Unique identifier - [cS4, d5, gS5, etc]
	value: 0, // * Number - Unique number corresponding to note (C is 0, do not subtract 12 for octaves) - i.e. [0, 5, 9, 14, etc]
	absoluteValue: 0, // * Number - Corresponds to note (C is 0, subtract 12 if over 1 octave) - i.e [0...11]
	name: 'c', // * String (Single character) - Lower case natural version of notes = [c, f, a, etc]
	label: 'C', // * String - Represent name, if accidental use Sharp version
	altLabel: '', // ? String - If accidental, use Flat version, else empty string ?? [EDIT] Is this still needed ??
	type: 'natural', // * String - Accidental type of notes - [natural, sharp, flat]
	isNatural: false, // ?  Boolean - Natural or accidental - Do we still need this?
	staffType: '', // * String - Type of staff row to create (empty string for none) - ['', 'line', 'space'] - Only use line/space on NATURAL notes
	selected: false // * Boolean - Selected by user
}

// * Master location for data - only notes data that changes, everything else trickles down from here.
export const notesData = [
	{
		// ? May not include this one - would have to add extra note on keyboard?
		id: 'cB4',
		value: -1,
		absoluteValue: 11,
		name: 'c',
		label: 'Cb',
		altLabel: 'B',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: '', // * May not be needed
		ghost: true
	},
	{
		id: 'c4',
		value: 0,
		absoluteValue: 0,
		name: 'c',
		label: 'C',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'cS4',
		value: 1,
		absoluteValue: 1,
		name: 'c',
		label: 'C#',
		altLabel: 'Db',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'dB4',
		value: 1,
		absoluteValue: 1,
		name: 'd',
		label: 'Db',
		altLabel: 'C#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'd4',
		value: 2,
		absoluteValue: 2,
		name: 'd',
		label: 'D',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'dS4',
		value: 3,
		absoluteValue: 3,
		name: 'd',
		label: 'D#',
		altLabel: 'Eb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'eB4',
		value: 3,
		absoluteValue: 3,
		name: 'e',
		label: 'Eb',
		altLabel: 'D#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'e4',
		value: 4,
		absoluteValue: 4,
		name: 'e',
		label: 'E',
		altLabel: 'Fb',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'eS4',
		value: 5,
		absoluteValue: 5,
		name: 'e',
		label: 'E#',
		altLabel: 'F',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'fB4',
		value: 4,
		absoluteValue: 4,
		name: 'f',
		label: 'Fb',
		altLabel: 'E',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'f4',
		value: 5,
		absoluteValue: 5,
		name: 'f',
		label: 'F',
		altLabel: 'E#',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'fS4',
		value: 6,
		absoluteValue: 6,
		name: 'f',
		label: 'F#',
		altLabel: 'Gb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'gB4',
		value: 6,
		absoluteValue: 6,
		name: 'g',
		label: 'Gb',
		altLabel: 'F#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'g4',
		value: 7,
		absoluteValue: 7,
		name: 'g',
		label: 'G',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'gS4',
		value: 8,
		absoluteValue: 8,
		name: 'g',
		label: 'G#',
		altLabel: 'Ab',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'aB4',
		value: 8,
		absoluteValue: 8,
		name: 'a',
		label: 'Ab',
		altLabel: 'G#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'a4',
		value: 9,
		absoluteValue: 9,
		name: 'a',
		label: 'A',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'aS4',
		value: 10,
		absoluteValue: 10,
		name: 'a',
		label: 'A#',
		altLabel: 'Bb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'bB4',
		value: 10,
		absoluteValue: 10,
		name: 'b',
		label: 'Bb',
		altLabel: 'A#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'b4',
		value: 11,
		absoluteValue: 11,
		name: 'b',
		label: 'B',
		altLabel: 'Cb',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'bS4',
		value: 12,
		absoluteValue: 0,
		name: 'b',
		label: 'B#',
		altLabel: 'Cb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},

	// ***** OCTAVE *****

	{
		id: 'cB5',
		value: 11,
		absoluteValue: 11,
		name: 'c',
		label: 'Cb',
		altLabel: 'B',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'c5',
		value: 12,
		absoluteValue: 0,
		name: 'c',
		label: 'C',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'cS5',
		value: 13,
		absoluteValue: 1,
		name: 'c',
		label: 'C#',
		altLabel: 'Db',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'dB5',
		value: 13,
		absoluteValue: 1,
		name: 'd',
		label: 'Db',
		altLabel: 'C#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'd5',
		value: 14,
		absoluteValue: 2,
		name: 'd',
		label: 'D',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'dS5',
		value: 15,
		absoluteValue: 3,
		name: 'd',
		label: 'D#',
		altLabel: 'Eb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'eB5',
		value: 15,
		absoluteValue: 3,
		name: 'e',
		label: 'Eb',
		altLabel: 'D#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'e5',
		value: 16,
		absoluteValue: 4,
		name: 'e',
		label: 'E',
		altLabel: 'Fb',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'eS5',
		value: 17,
		absoluteValue: 5,
		name: 'e',
		label: 'E#',
		altLabel: 'F',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'fB5',
		value: 16,
		absoluteValue: 4,
		name: 'f',
		label: 'Fb',
		altLabel: 'E',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'f5',
		value: 17,
		absoluteValue: 5,
		name: 'f',
		label: 'F',
		altLabel: 'E#',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line'
	},
	{
		id: 'fS5',
		value: 18,
		absoluteValue: 6,
		name: 'f',
		label: 'F#',
		altLabel: 'Gb',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'gB5',
		value: 18,
		absoluteValue: 6,
		name: 'g',
		label: 'Gb',
		altLabel: 'F#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: ''
	},
	{
		id: 'g5',
		value: 19,
		absoluteValue: 7,
		name: 'g',
		label: 'G',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'space'
	},
	{
		id: 'gS5',
		value: 20,
		absoluteValue: 8,
		name: 'g',
		label: 'G#',
		altLabel: 'Ab',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: '',
		ghost: true
	},
	{
		id: 'aB5',
		value: 20,
		absoluteValue: 8,
		name: 'a',
		label: 'Ab',
		altLabel: 'G#',
		type: 'flat',
		isNatural: false,
		selected: false,
		staffType: '',
		ghost: true
	},
	{
		id: 'a5',
		value: 21,
		absoluteValue: 9,
		name: 'a',
		label: 'A',
		altLabel: '',
		type: 'natural',
		isNatural: true,
		selected: false,
		staffType: 'line',
		ghost: true
	},
	{
		id: 'aS5',
		value: 22,
		absoluteValue: 10,
		name: 'a',
		label: 'A#',
		altLabel: 'G#',
		type: 'sharp',
		isNatural: false,
		selected: false,
		staffType: '',
		ghost: true
	}
]
// above obj is notesData

const staffArrToObj = arr => ({
	flat: arr[0],
	natural: arr[1],
	sharp: arr[2]
})

export const types = ['flat', 'natural', 'sharp']

// * Notes data directly used in Redux
// * Expresses notesData as an object of notes
export const notesMaster = {
	c4: staffArrToObj(notesData.slice(0, 3)),
	d4: staffArrToObj(notesData.slice(3, 6)),
	e4: staffArrToObj(notesData.slice(6, 9)),
	f4: staffArrToObj(notesData.slice(9, 12)),
	g4: staffArrToObj(notesData.slice(12, 15)),
	a4: staffArrToObj(notesData.slice(15, 18)),
	b4: staffArrToObj(notesData.slice(18, 21)),
	c5: staffArrToObj(notesData.slice(21, 24)),
	d5: staffArrToObj(notesData.slice(24, 27)),
	e5: staffArrToObj(notesData.slice(27, 30)),
	f5: staffArrToObj(notesData.slice(30, 33)),
	g5: staffArrToObj(notesData.slice(33, 36))
}

const { c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5 } = notesMaster // * Deconstructs notesObj to more easily access in keysMaster

// * Static info used to construct visual of staff
export const staffInfo = {
	c4: { staffType: 'line', bLeft: false, bRight: true },
	d4: { staffType: 'row', bLeft: true, bRight: true },
	e4: { staffType: 'line', bLeft: true, bRight: false },
	f4: { staffType: 'row', bLeft: false, bRight: true },
	g4: { staffType: 'line', bLeft: true, bRight: true },
	a4: { staffType: 'row', bLeft: true, bRight: true },
	b4: { staffType: 'line', bLeft: true, bRight: false },
	c5: { staffType: 'space', bLeft: false, bRight: true },
	d5: { staffType: 'line', bLeft: true, bRight: true },
	e5: { staffType: 'space', bLeft: true, bRight: false },
	f5: { staffType: 'line', bLeft: false, bRight: true },
	g5: { staffType: 'space', bLeft: true, bRight: true }
}

// * Do not change directly, changes as a result of notesMaster change
const staffMaster = [
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

// * Do not change directly, changes as a result of notesMaster change
const keysMaster = [
	{ id: 'c4', notes: [c4.natural], value: 0, blackKey: false },
	{ id: 'cS4', notes: [c4.sharp, d4.flat], value: 1, blackKey: true },
	{ id: 'd4', notes: [d4.natural], value: 2, blackKey: false },
	{ id: 'dS4', notes: [d4.sharp, e4.flat], value: 3, blackKey: true },
	{ id: 'e4', notes: [e4.natural, f4.flat], value: 4, blackKey: false },
	{ id: 'f4', notes: [f4.natural, e4.sharp], value: 5, blackKey: false },
	{ id: 'fS4', notes: [f4.sharp, g4.flat], value: 6, blackKey: true },
	{ id: 'g4', notes: [g4.natural], value: 7, blackKey: false },
	{ id: 'gS4', notes: [g4.sharp, a4.flat], value: 8, blackKey: true },
	{ id: 'a4', notes: [g4.natural], value: 9, blackKey: false },
	{ id: 'aS4', notes: [a4.sharp, b4.flat], value: 10, blackKey: true },
	{ id: 'b4', notes: [b4.natural, c5.flat], value: 11, blackKey: false },
	{ id: 'c5', notes: [c5.natural, b4.sharp], value: 12, blackKey: false },
	{ id: 'cS5', notes: [c5.sharp, d5.flat], value: 13, blackKey: true },
	{ id: 'd5', notes: [d5.natural], value: 14, blackKey: false },
	{ id: 'dS5', notes: [d5.sharp, e5.flat], value: 15, blackKey: true },
	{ id: 'e5', notes: [e5.natural, f5.flat], value: 16, blackKey: false },
	{ id: 'f5', notes: [f5.natural, e5.sharp], value: 17, blackKey: false },
	{ id: 'fS5', notes: [f5.sharp, g5.flat], value: 18, blackKey: true },
	{ id: 'g5', notes: [g5.natural], value: 19, blackKey: false },
	{ id: 'gS5', notes: [g5.sharp], value: 20, blackKey: true }
]
