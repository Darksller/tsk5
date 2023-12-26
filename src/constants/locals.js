import { fa, de, en, Faker } from '@faker-js/faker'

const enFaker = new Faker({
	locale: en,
})
const deFaker = new Faker({
	locale: de,
})
const faFaker = new Faker({
	locale: fa,
})

export let languageFaker = {
	English: enFaker,
	German: deFaker,
	Farsi: faFaker,
}

export const locales = [
	{ name: 'English', locale: enFaker },
	{ name: 'German', locale: deFaker },
	{ name: 'Farsi', locale: faFaker },
]
