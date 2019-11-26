// * array (propType = array) -> array which you are searching.
// * value (propType = string or number) -> value of item you are finding
// * key (propType = string) -> key of item you are finding
// ? No longer used
const indexById = (array, value, key = 'value') => {
	return array.reduce((acc, obj, index) => {
		return obj[key] === value ? index : acc;
	}, -1);
};

// ? No longer used
export const toggleById = (value, array, key) => {
	const index = indexById(array, value, key);
	const update = array[index];

	return [
		...array.slice(0, index),
		{ ...update, selected: !update.selected },
		...array.slice(index + 1)
	];
};

export const toggleNoteById = (notesState = {}, noteObj, favorSharps) => {
	let prevSelected = false; // * turns true when going from natural to accidental
	let selected = true; // * whether or not updated note should be selected/shown
	let prevType = ''; // * what the note was when it was clicked
	let newType = 'natural'; // * updated notes type

	// * Finds selected note, updates variables
	Object.keys(noteObj.notes).forEach(key => {
		if (noteObj.notes[key].selected) {
			prevType = noteObj.notes[key].type;
			prevSelected = true;

			if (prevType === 'natural') {
				newType = favorSharps ? 'sharp' : 'flat';
			}
			if (prevType === 'sharp' || prevType === 'flat') {
				newType = '';
				selected = false;
			}
		}
	});

	const selectedNote = {
		...noteObj.notes,
		[newType]: {
			...noteObj.notes[newType],
			selected
		}
	};

	return {
		...notesState,
		[noteObj.id]: prevType
			? {
					...selectedNote,
					[prevType]: {
						...noteObj.notes[prevType],
						selected: !prevSelected
					}
			  }
			: selectedNote
	};
};
