function generateAddress(customFaker) {
	let randomAddress = ''
	let shouldInclude = () =>
		customFaker.number.float({ min: 0, max: 1, precision: 0.1 }) <= 0.5

	if (shouldInclude()) randomAddress += customFaker.location.state() + ' '
	if (shouldInclude()) randomAddress += customFaker.location.city() + ' '
	if (shouldInclude())
		randomAddress += customFaker.location.streetAddress() + ' '
	if (shouldInclude())
		randomAddress += customFaker.location.secondaryAddress() + ' '
	if (shouldInclude()) randomAddress += customFaker.location.zipCode() + ' '

	return randomAddress.trim() + '  '
}

export function generateItem(customFaker) {
	return {
		randomId: customFaker.string.uuid(),
		fullName: customFaker.person.fullName(),
		address: generateAddress(customFaker),
		phone: customFaker.phone.number(),
	}
}

export function generateMoreData(customFaker, len = 10) {
	return Array.from({ length: len }, (_, index) => generateItem(customFaker))
}

export function generateRandomSeed() {
	return Math.floor(Math.random() * 999999999)
}
