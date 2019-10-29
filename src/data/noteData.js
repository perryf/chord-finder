// * "Master object" (hypothetical)
const exampleNoteArray = [
	{
		id: 'c4', // * String - Unique identifier - [cS4, d5, gS5, etc]
		value: 0, // * Number - Unique number corresponding to note (C is 0, do not subtract 12 for octaves) - i.e. [0, 5, 9, 14, etc]
		keyValue: 0, // * Number - Corresponds to note (C is 0, subtract 12 if over 1 octave) - i.e [0...11]
		label: 'C', // * String - Represent name, if accidental use Sharp version
		altLabel: '', // * String - If accidental, use Flat version, else empty string
		isNatural: false, // * Boolean - Natural or accidental
		selected: false, // * Boolean - Selected by user
		bLeft: false, // * Boolean - On keyboard, is there a black key to the left
		bRight: true // * Boolean - On keyboard, is there a black key to the right
	}
]

export const notes = [
	{
		id: 'c4',
		value: 0,
		keyValue: 0,
		label: 'C',
		altLabel: '',
		isNatural: true,
		bLeft: false,
		bRight: true,
		selected: false
	},
	{
		id: 'cS4',
		value: 1,
		keyValue: 1,
		label: 'C#',
		altLabel: 'Db',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'd4',
		value: 2,
		keyValue: 2,
		label: 'D',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: true,
		selected: false
	},
	{
		id: 'dS4',
		value: 3,
		keyValue: 3,
		label: 'D#',
		altLabel: 'Eb',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'e4',
		value: 4,
		keyValue: 4,
		label: 'E',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: false,
		selected: false
	},
	{
		id: 'f4',
		value: 5,
		keyValue: 5,
		label: 'F',
		altLabel: '',
		isNatural: true,
		bLeft: false,
		bRight: true,
		selected: false
	},
	{
		id: 'fS4',
		value: 6,
		keyValue: 6,
		label: 'F#',
		altLabel: 'Gb',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'g4',
		value: 7,
		keyValue: 7,
		label: 'G',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: true,
		selected: false
	},
	{
		id: 'gS4',
		value: 8,
		keyValue: 8,
		label: 'G#',
		altLabel: 'Ab',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'a4',
		value: 9,
		keyValue: 9,
		label: 'A',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: true,
		selected: false
	},
	{
		id: 'aS4',
		value: 10,
		keyValue: 10,
		label: 'A#',
		altLabel: 'Bb',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'b4',
		value: 11,
		keyValue: 11,
		label: 'B',
		altLabel: 'B',
		isNatural: true,
		bLeft: true,
		bRight: false,
		selected: false
	},
	{
		id: 'c5',
		value: 12,
		keyValue: 0,
		label: 'C',
		altLabel: 'C',
		isNatural: true,
		bLeft: false,
		bRight: true,
		selected: false
	},
	{
		id: 'cS5',
		value: 13,
		keyValue: 1,
		label: 'CS',
		altLabel: 'Db',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'd5',
		value: 14,
		keyValue: 2,
		label: 'D',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: true,
		selected: false
	},
	{
		id: 'dS5',
		value: 15,
		keyValue: 3,
		label: 'D#',
		altLabel: 'Eb',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'e5',
		value: 16,
		keyValue: 4,
		label: 'E',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: false,
		selected: false
	},
	{
		id: 'f5',
		value: 17,
		keyValue: 5,
		label: 'F',
		altLabel: 'F',
		isNatural: true,
		bLeft: false,
		bRight: true,
		selected: false
	},
	{
		id: 'fS5',
		value: 18,
		keyValue: 6,
		label: 'F#',
		altLabel: 'Gb',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	},
	{
		id: 'g5',
		value: 19,
		keyValue: 7,
		label: 'G',
		altLabel: '',
		isNatural: true,
		bLeft: true,
		bRight: true,
		selected: false
	},
	{
		id: 'gS5',
		value: 20,
		keyValue: 8,
		label: 'G#',
		altLabel: 'Ab',
		isNatural: false,
		bLeft: false,
		bRight: false,
		selected: false
	}
]

// * "Master object" (hypothetical)
const exampleNotsMaster = {
	id: 'c4', // * String - Unique identifier - [cS4, d5, gS5, etc]
	value: 0, // * Number - Unique number corresponding to note (C is 0, do not subtract 12 for octaves) - i.e. [0, 5, 9, 14, etc]
	absoluteValue: 0, // * Number - Corresponds to note (C is 0, subtract 12 if over 1 octave) - i.e [0...11]
	name: 'c', // * String - Lower case natural version of notes = [c, f, a, etc]
	label: 'C', // * String - Represent name, if accidental use Sharp version
	altLabel: '', // ? String - If accidental, use Flat version, else empty string ?? [EDIT] Is this still needed ??
	type: 'natural', // * String - Accidental type of notes - [natural, sharp, flat]
	isNatural: false, // ?  Boolean - Natural or accidental - Do we still need this?
	selected: false, // * Boolean - Selected by user
	staffType: '' // * String - Type of staff row to create (empty string for none) - ['', 'line', 'space'] - Only use line/space on NATURAL notes
}

// * Master location for data - only notes data that changes, everything else trickles down from here.
export const notesMaster = [
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
		staffType: ''
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
		id: 'bS5',
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

	// ******** OCTAVE *********

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
		staffType: 'line'
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
		staffType: 'space'
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
		staffType: 'line'
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
		staffType: 'space'
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
		staffType: 'line'
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
		staffType: ''
	}
]
// notesMaster

const staffArrToObj = arr => ({
	flat: arr[0],
	natural: arr[1],
	sharp: arr[2]
})

// * Expresses notesMaster as an object of notes
const notesObj = {
	c: staffArrToObj(notesMaster.slice(0, 3)),
	d: staffArrToObj(notesMaster.slice(3, 6)),
	e: staffArrToObj(notesMaster.slice(6, 9)),
	f: staffArrToObj(notesMaster.slice(9, 12)),
	g: staffArrToObj(notesMaster.slice(12, 15)),
	a: staffArrToObj(notesMaster.slice(15, 18)),
	b: staffArrToObj(notesMaster.slice(18, 21)),
	c1: staffArrToObj(notesMaster.slice(21, 24)),
	d1: staffArrToObj(notesMaster.slice(24, 27)),
	e1: staffArrToObj(notesMaster.slice(27, 30)),
	f1: staffArrToObj(notesMaster.slice(30, 33)),
	g1: staffArrToObj(notesMaster.slice(33, 36))
}

const { c, d, e, f, g, a, b, c1, d1, e1, f1, g1 } = notesObj

// * Do not change directly, changes as a result of notesMaster change
const keysMaster = {
	c: { notes: [c.natural], value: 0 }, // ? should b.sharp be here?
	cS: { notes: [c.natural, d.flat], value: 1 },
	d: { notes: [d.natural], value: 2 },
	dS: { notes: [d.sharp, e.flat], value: 3 },
	e: { notes: [e.natural, f.flat], value: 4 },
	f: { notes: [f.natural, e.sharp], value: 5 },
	fS: { notes: [f.sharp, g.flat], value: 6 },
	g: { notes: [g.natural], value: 7 },
	gS: { notes: [g.sharp, a.flat], value: 8 },
	a: { notes: [g.natural], value: 9 },
	aS: { notes: [a.sharp, b.flat], value: 10 },
	b: { notes: [b.natural, c1.flat], value: 11 },
	c1: { notes: [c1.natural, b.sharp], value: 12 },
	cS1: { notes: [c1.sharp, d1.flat], value: 13 },
	d1: { notes: [d1.natural], value: 14 },
	dS1: { notes: [d1.sharp, e1.flat], value: 15 },
	e1: { notes: [e1.natural, f1.flat], value: 16 },
	f1: { notes: [e1.natural, e1.sharp], value: 17 },
	fS1: { notes: [f1.sharp, g1.sharp], value: 18 },
	g1: { notes: [g1.natural], value: 19 },
	gS1: { notes: [g1.sharp], value: 20 } // ? should a.flat be here?
}

console.log(keysMaster)
