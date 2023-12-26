import { addSymbol, removeSymbol, swapSymbols } from './makeDistort'

export function makeErrors(errors, customFaker, notChangedItems) {
	if (errors === 0) return notChangedItems
	let fractionPart = errors - Math.floor(errors)
	let entirePart = Math.floor(errors)
	let forEachRecord = entirePart / 3
	if (
		customFaker.number.float({ min: 0, max: 1, precision: 0.1 }) <= fractionPart
	)
		entirePart++

	let newItems = notChangedItems.map(item => ({
		...item,
		fullName: randomError(item.fullName, forEachRecord, customFaker),
		address: randomError(item.address, forEachRecord, customFaker),
		phone: randomError(item.phone, forEachRecord, customFaker),
	}))

	return newItems
}

const errorType = {
	1: removeSymbol,
	2: addSymbol,
	3: swapSymbols,
}

function randomError(record, part, customFaker) {
	let newRecord = record
	part = Math.ceil(part)
	while (part--) {
		let randomCase = customFaker.number.int({ min: 1, max: 3 })
		newRecord = errorType[randomCase](newRecord, customFaker)
	}
	return newRecord
}
