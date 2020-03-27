// * Example of note object used in notesData
// const exampleNotesData = {
// 	id: 'c4', // * String - Unique identifier - [cS4, d5, gS5, etc]
// 	value: 0, // * Number - Unique number corresponding to note (C is 0, do not subtract 12 for octaves) - i.e. [0, 5, 9, 14, etc]
// 	absoluteValue: 0, // * Number - Corresponds to note (C is 0, subtract 12 if over 1 octave) - i.e [0...11]
// 	name: 'c', // * String (Single character) - Lower case natural version of notes = [c, f, a, etc]
// 	label: 'C', // * String - Represent name, if accidental use Sharp version
// 	altLabel: '', // ? String - If accidental, use Flat version, else empty string ?? [EDIT] Is this still needed ??
// 	type: 'natural', // * String - Accidental type of notes - [natural, sharp, flat]
// 	isNatural: false, // ?  Boolean - Natural or accidental - Do we still need this?
// 	staffType: '', // * String - Type of staff row to create (empty string for none) - ['', 'line', 'space'] - Only use line/space on NATURAL notes
// 	selected: false // * Boolean - Selected by user
// }

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
