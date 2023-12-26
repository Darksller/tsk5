import React, { useDeferredValue } from 'react'
import { TableCell, TableBody, TableRow } from '@mui/material'
export function MyTableBody({ items = [] }) {
	const values = useDeferredValue(items)
	return (
		<TableBody>
			{values.map((row, index) => (
				<TableRow key={row.randomId}>
					<TableCell component='th' scope='row'>
						{index + 1}
					</TableCell>
					<TableCell>{row.randomId}</TableCell>
					<TableCell align='right'>{row.fullName}</TableCell>
					<TableCell align='right'>{row.address}</TableCell>
					<TableCell align='right'>{row.phone}</TableCell>
				</TableRow>
			))}
		</TableBody>
	)
}
