const indexById = (array, value, key = 'value') => {
	return array.reduce((acc, obj, index) => {
		return obj[key] === value ? index : acc
	}, -1)
}

export const toggleNoteById = (value, array, key) => {
	console.log(array, key, value)
	const index = indexById(array, value, key)
	const update = array[index]

	// console.log('reducer', update)
	// console.log(!update.selected)

	return [
		...array.slice(0, index),
		{ ...update, selected: !update.selected },
		...array.slice(index + 1)
	]
}
