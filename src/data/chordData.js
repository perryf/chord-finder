// ***** MAJOR *****

export const five = {
	notes: [0, 7],
	label: '5',
	short: '5',
	type: 'basic'
}
export const major = {
	notes: [0, 4, 7],
	label: 'Major',
	short: '',
	type: 'basic'
}
export const major2 = {
	notes: [0, 2, 4, 7],
	label: 'Major 2nd',
	short: '2',
	type: 'common'
}
export const major6 = {
	notes: [0, 4, 7, 9],
	label: 'Major 6th',
	short: '6',
	type: 'common'
}
export const major7 = {
	notes: [0, 4, 7, 11],
	label: 'Major 7th',
	short: '∆7',
	type: 'common'
}
export const major9 = {
	notes: [0, 4, 7, 11, 2],
	label: 'Major 9th',
	short: 'M9',
	abbr: '∆9',
	type: 'common'
}
export const major11 = {
	notes: [0, 4, 7, 11, 2, 6],
	label: 'Major sharp 11th',
	short: 'M#11',
	abbr: '∆#11',
	type: 'uncommon'
}
export const major13 = {
	notes: [0, 4, 7, 11, 2, 6, 9],
	label: 'Major 13th',
	short: 'M13',
	abbr: '∆13',
	type: 'uncommon'
}

// ***** DOMINANT *****

export const dom7 = {
	notes: [0, 4, 7, 10],
	label: 'Dominant 7th',
	short: '7',
	type: 'basic'
}
export const dom9 = {
	notes: [0, 4, 7, 10, 2],
	label: 'Dominant 9th',
	short: '9',
	type: 'common'
}
export const dom7b9 = {
	notes: [0, 4, 7, 10, 1],
	label: 'Dominant 7th flat 9th',
	short: '7b9',
	type: 'uncommon'
}
export const dom7S9 = {
	notes: [0, 4, 7, 10, 3],
	label: 'Dominant 7th sharp 9th',
	short: '7#9',
	type: 'uncommon'
}
export const dom7b9S9 = {
	notes: [0, 4, 7, 10, 1, 3],
	label: 'Dominant 7th flat 9th sharp 9th',
	short: '7b9#9',
	type: 'uncommon'
}
export const dom11 = {
	notes: [0, 4, 7, 10, 2, 6],
	label: 'Dominant 7th sharp 11th',
	short: '7#11',
	type: 'uncommon'
}
export const dom7b911 = {
	notes: [0, 4, 7, 10, 1, 6],
	label: 'Dominant 7th flat 9th sharp 11th',
	short: '7b9#11',
	type: 'uncommon'
}
export const dom7S911 = {
	notes: [0, 4, 7, 10, 3, 6],
	label: 'Dominant 7th sharp 9th sharp 11th',
	short: '7#9#11',
	type: 'uncommon'
}
export const dom13 = {
	notes: [0, 4, 7, 10, 2, 6, 9],
	label: 'Dominant 13th',
	short: '13',
	type: 'uncommon'
}
export const dom7b913 = {
	notes: [0, 4, 7, 10, 1, 6, 9],
	label: 'Dominant 7th flat 9th 13th',
	short: '7b9#11 13',
	type: 'uncommon'
}
export const dom7S913 = {
	notes: [0, 4, 7, 10, 3, 6, 9],
	label: 'Dominant 7th sharp 9th 13th',
	short: '7#9#11 13',
	type: 'uncommon'
}

// ***** MINOR *****

export const minor = {
	notes: [0, 3, 7],
	label: 'Minor',
	short: 'm',
	type: 'basic'
}
export const minor2 = {
	notes: [0, 2, 3, 7],
	label: 'Minor 2nd',
	short: 'm2',
	type: 'common'
}
export const minor6 = {
	notes: [0, 3, 7, 9],
	label: 'Minor 6th',
	short: 'm6',
	type: 'common'
}
export const minor7 = {
	notes: [0, 3, 7, 10],
	label: 'Minor 7th',
	short: 'm7',
	type: 'basic'
}
export const minor9 = {
	notes: [0, 3, 7, 10, 2],
	label: 'Minor 9th',
	short: 'm9',
	type: 'uncommon'
}
export const minor11 = {
	notes: [0, 3, 7, 10, 2, 5],
	label: 'Minor 7th 11th',
	short: 'm11',
	type: 'uncommon'
}
export const minor13 = {
	notes: [0, 3, 7, 10, 2, 5, 9],
	label: 'Minor 13th',
	short: 'm13',
	type: 'uncommon'
}

// ***** DIMINISHED ******

export const dim = {
	notes: [0, 3, 6],
	label: 'Diminished',
	short: 'dim',
	abbr: 'o',
	type: 'basic'
}
export const dimH7 = {
	notes: [0, 3, 6, 10],
	label: 'Half Diminished 7th',
	short: 'dH7',
	abbr: 'ø7',
	type: 'common'
}
export const dim7 = {
	notes: [0, 3, 6, 9],
	label: 'Fully Diminished 7th',
	short: 'd7',
	abbr: 'o7',
	type: 'common'
}

// ****** AUGMENTED ******

export const aug = {
	notes: [0, 4, 8],
	label: 'Augmented',
	short: 'Aug',
	abbr: '+',
	type: 'basic'
}
export const aug7 = {
	notes: [0, 4, 8, 10],
	label: 'Augmented 7th',
	short: 'Aug7',
	abbr: '+7',
	type: 'uncommon'
}
export const aug9 = {
	notes: [0, 4, 8, 10, 2],
	label: 'Augmented 9th',
	short: 'Aug9',
	abbr: '+9',
	type: 'uncommon'
}
export const aug11 = {
	notes: [0, 4, 8, 10, 2, 6],
	label: 'Augmented 7th sharp 11th',
	short: 'Aug7 #11',
	abbr: '+7#11',
	type: 'uncommon'
}
export const aug13 = {
	notes: [0, 4, 8, 10, 2, 6, 9],
	label: 'Augmented 13th',
	short: 'Aug13',
	abbr: '+13',
	type: 'rare'
}
export const augM7 = {
	notes: [0, 4, 8, 11],
	label: 'Augmented Major 7th',
	short: 'AugM7',
	abbr: '+∆7',
	type: 'rare'
}
export const augM9 = {
	notes: [0, 4, 8, 11, 2],
	label: 'Augmented 9th',
	short: 'AugM9',
	abbr: '+∆9',
	type: 'rare'
}
export const augM11 = {
	notes: [0, 4, 8, 11, 2, 6],
	label: 'Augmented 7th sharp 11th',
	short: 'AugM7 #11',
	abbr: '+∆#11',
	type: 'rare'
}
export const augM13 = {
	notes: [0, 4, 8, 11, 2, 6, 9],
	label: 'Augmented 13th',
	short: 'AugM7 13',
	abbr: '+∆13',
	type: 'rare'
}

// ****** SUSPENDED ******

export const sus = {
	notes: [0, 5, 7],
	label: 'Suspended',
	short: 'sus4',
	type: 'basic'
}
export const sus2 = {
	notes: [0, 2, 5, 7],
	label: 'Suspended 2nd',
	short: 'sus2',
	type: 'common'
}
export const sus7 = {
	notes: [0, 5, 7, 10],
	label: 'Suspended 7th',
	short: 'sus7',
	type: 'common'
}
export const sus9 = {
	notes: [0, 5, 7, 10, 2],
	label: 'Suspended 9th',
	short: 'sus9',
	type: 'uncommon'
}
export const susM7 = {
	notes: [0, 5, 7, 11],
	label: 'Suspended Major 7th',
	short: 'susM7',
	type: 'rare'
}
export const susM9 = {
	notes: [0, 5, 7, 11, 2],
	label: 'Suspended Major 9th',
	short: 'susM9',
	type: 'rare'
}

// ****** MISC ******

export const majorMinor = {
	notes: [0, 3, 4, 7],
	label: 'Major add flat 3',
	short: 'M add b3',
	type: 'uncommon'
}
