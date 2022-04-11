import React, {useState, useEffect} from 'react'
import './home.css'
import { TopNavigation } from '../../Components/TopNavigation'

import '@splidejs/react-splide/css'

import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const Home = () => {
	const [showSplide, setShowSplide] = useState(true)
	const [showingCatergory, setShowingCatergory] = useState('Next workout')

	useEffect(() => {
		if (showingCatergory === 'Your workouts' || showingCatergory === 'Edit workouts' || showingCatergory === 'Your progress') setShowSplide(false)
		if (showingCatergory === 'Next workout' || showingCatergory === 'Edit schedule') setShowSplide(true)
	}, [showingCatergory])

	return (
		<div>
			<h1> { '< Progress />' } </h1>
			<TopNavigation categorySelection={setShowingCatergory}/>
			{
				showSplide ?
				<Splide
					options={ {
						rewind: true,
						width: '100%',
						height: 200,
						gap: '1rem',
						type: 'loop',
						perPage: 5,
						focus: 'center',
					} }
					>
					<SplideSlide>
						<p>April 8th</p>
						<i>No workout planned</i>
					</SplideSlide>
					<SplideSlide className="SplideSlide">
						<p>April 9th</p>
						<i>No workout planned</i>
					</SplideSlide>
					<SplideSlide>
						<p>April 10th | Today</p>
						<p>Chest workout planned</p>
					</SplideSlide>
					<SplideSlide>
						<p>April 11th</p>
						<p>Back workout planned</p>
					</SplideSlide>
					<SplideSlide>
						<p>April 12th</p>
						<i>No workout planned</i>
					</SplideSlide>
				</Splide>
				: null
			}
			<div id="main-output">
				{showingCatergory}
			</div>

		</div>
	)
}







/*


			<div id="next-workout-container">
				<Card className="next-workout-card-selected">
					<div className="next-workout-card-left">
						<p>Bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Incline bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Narrow grip bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Tricep extensions</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Chest flies</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
			</div>


*/