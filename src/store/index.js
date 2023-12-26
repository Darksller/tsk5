import { create } from 'zustand'
import { languageFaker } from '../constants/locals'
export const useStore = create((set, get) => ({
	locale: 'English',
	setLocale: language => set({ locale: language }),
	seed: 0,
	setSeed: seed => set({ seed }),
	errors: 0,
	setErrors: errors => set({ errors }),
	getFaker: () => languageFaker[get().locale],
	items: [],
	setItems: items => set({ items }),
}))
