export function removeSymbol(newRecord, customFaker) {
	if (newRecord.length <= 2) return newRecord
	const randomIndexToRemove = customFaker.number.int({
		min: 0,
		max: newRecord.length - 1,
	})
	return (
		newRecord.slice(0, randomIndexToRemove) +
		newRecord.slice(randomIndexToRemove + 1)
	)
}

export function addSymbol(newRecord, customFaker) {
	const randomCharToAdd = customFaker.word.words()[0]
	const randomIndexToAdd = customFaker.number.int({
		min: 0,
		max: newRecord.length,
	})
	return (
		newRecord.slice(0, randomIndexToAdd) +
		randomCharToAdd +
		newRecord.slice(randomIndexToAdd)
	)
}

export function swapSymbols(newRecord, customFaker) {
	const randomIndexToSwap = customFaker.number.int({
		min: 0,
		max: newRecord.length - 2,
	})
	const swappedRecord = newRecord.split('')
	;[swappedRecord[randomIndexToSwap], swappedRecord[randomIndexToSwap + 1]] = [
		swappedRecord[randomIndexToSwap + 1],
		swappedRecord[randomIndexToSwap],
	]
	return swappedRecord.join('')
}
