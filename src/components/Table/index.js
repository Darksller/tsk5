import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { TableCell, TableHead, TableRow, Container } from '@mui/material'
import { StyledTable } from './styles'
import ToolBar from '../ToolBar'
import { generateMoreData } from '../../utils/generate'
import { useStore } from '../../store'
import { makeErrors } from '../../utils/distortData'
import { MyTableBody } from '../TableBody'

export function DataTable() {
	const { locale, seed, errors, getFaker, items, setItems } = useStore()
	const faker = getFaker()

	useEffect(() => {
		faker.seed(seed)
		reRender()
	}, [locale, seed, errors])

	function reRender() {
		let data = generateMoreData(faker, 20)
		let errorData = makeErrors(errors, faker, data)
		setItems(errorData)
	}

	function addAdditionalData() {
		let data = generateMoreData(faker, 10)
		let errorData = makeErrors(errors, faker, data)
		setItems(items.concat(errorData))
	}

	return (
		<Container>
			<InfiniteScroll
				dataLength={items.length}
				next={addAdditionalData}
				hasMore={true}
			>
				<ToolBar getErrorsCount={makeErrors} />
				<StyledTable>
					<TableHead>
						<TableRow>
							<TableCell>Number</TableCell>
							<TableCell>Random&nbsp;Id</TableCell>
							<TableCell align='right'>Full&nbsp;Name</TableCell>
							<TableCell align='right'>Address</TableCell>
							<TableCell align='right'>Phone</TableCell>
						</TableRow>
					</TableHead>
					<MyTableBody items={items} />
				</StyledTable>
			</InfiniteScroll>
		</Container>
	)
}
