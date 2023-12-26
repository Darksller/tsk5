import { mkConfig, generateCsv, download } from 'export-to-csv'
const csvConfig = mkConfig({ useKeysAsHeaders: true })

export function createCsv(data) {
	const csv = generateCsv(csvConfig)(data)
	download(csvConfig)(csv)
}
