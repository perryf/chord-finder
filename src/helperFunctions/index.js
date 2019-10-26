const indexById = (array, value, key = 'id') => {
	return array.reduce((acc, obj, index) => {
		return obj[key] === value ? index : acc
	}, -1)
}

export const toggleNoteById = (identifier, array, key) => {
	const index = indexById(array, identifier, key)
	const update = array[index]

	return [
		...array.slice(0, index),
		{ ...update, selected: !update.selected },
		...array.slice(index + 1)
	]
}
