import React from 'react'
import {
	Select,
	TextField,
	MenuItem,
	InputLabel,
	FormControl,
	AppBar,
	IconButton,
	Slider,
	Box,
} from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { languageFaker } from '../../constants/locals'
import { useStore } from '../../store'
import { generateRandomSeed } from '../../utils/generate'
import { createCsv } from '../../utils/csv'
export default function ToolBar() {
	const { locale, setLocale, seed, setSeed, errors, setErrors, items } =
		useStore()
	function randomSeed() {
		setSeed(generateRandomSeed())
	}
	function handleChange(event) {
		setSeed(parseFloat(event.target.value))
	}
	function onErrorsChange(event) {
		setErrors(parseFloat(event.target.value))
	}
	function exportData() {
		createCsv(items)
	}
	return (
		<AppBar
			position='static'
			sx={{ backgroundColor: '#7a1df1', minHeight: 75, marginTop: 0.2 }}
		>
			<Box className='mt-4'>
				<FormControl sx={{ minWidth: 110, marginLeft: 2 }}>
					<InputLabel
						id='demo-simple-select-label'
						sx={{
							color: 'white',
							'&.Mui-focused': {
								color: 'white',
							},
						}}
					>
						Locale
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						onChange={event => {
							setLocale(event.target.value)
						}}
						value={locale}
						sx={{
							'.MuiOutlinedInput-notchedOutline': {
								borderColor: '#7a1df1',
							},
							color: 'white',
						}}
					>
						{Object.keys(languageFaker).map(key => (
							<MenuItem key={key} value={key}>
								{key}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<Slider
					defaultValue={0}
					step={0.25}
					marks
					min={0}
					max={10}
					valueLabelDisplay='auto'
					value={errors}
					onChange={event => setErrors(parseFloat(event.target.value))}
					style={{
						marginLeft: '25px',
						marginRight: '20px',
						color: 'white',
						maxWidth: '300px',
						marginTop: '12px',
					}}
				/>

				<TextField
					id='outlined-basic2'
					label='Errors'
					variant='outlined'
					type='number'
					sx={{
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: 'white',
						},
					}}
					InputProps={{
						style: {
							color: 'white',
						},
					}}
					InputLabelProps={{
						style: {
							color: 'white',
						},
					}}
					value={errors}
					onChange={onErrorsChange}
				/>

				<TextField
					id='outlined-basic'
					label='Seed'
					variant='outlined'
					type='number'
					sx={{
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: 'white',
						},
						marginLeft: '2rem',
					}}
					InputProps={{
						style: {
							color: 'white',
						},
					}}
					InputLabelProps={{
						style: {
							color: 'white',
						},
					}}
					value={seed}
					onChange={handleChange}
				/>

				<IconButton
					sx={{ color: 'white', marginBottom: 2.5 }}
					onClick={randomSeed}
				>
					<ShuffleIcon fontSize='large' />
				</IconButton>
				<IconButton
					sx={{ marginBottom: 2.5, color: 'white', marginLeft: '110px' }}
					onClick={exportData}
				>
					<FileUploadIcon fontSize='large' />
				</IconButton>
			</Box>
		</AppBar>
	)
}
