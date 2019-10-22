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

const notes = [
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
