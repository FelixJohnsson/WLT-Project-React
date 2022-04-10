import './home.css'
import gym from './gym.png'
import gymStation from './gym-station.png'
import muscle from './muscle.png'
import weightlifter from './weightlifter.png'
import stationaryBike from './stationary-bike.png'
import weights from './weights.png'
import '@splidejs/react-splide/css'


import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const Home = () => {
	return (
		<div>
			<h1> { '< Progress />' } </h1>
			<div id="category-selector-div">
				<div className="category-card-unselected">
					<img src={gym} alt="Gym"></img>
					<p>Your workouts</p>
				</div>	
				<div className="category-card-unselected">
					<img src={gymStation} alt="Gym"></img>
					<p>Your schedule</p>
				</div>
				<div className="category-card-selected">
					<img src={muscle} alt="Gym"></img>
					<p>Next workout</p>
				</div>	
				<div className="category-card-unselected">
					<img src={weightlifter} alt="Gym"></img>
					<p>Edit workouts</p>
				</div>	
				<div className="category-card-unselected">
					<img src={stationaryBike} alt="Gym"></img>
					<p>Edit schedule</p>
				</div>	
				<div className="category-card-unselected">
					<img src={weights} alt="Gym"></img>
					<p>Your progress</p>
				</div>	
			</div>
			<Splide
				options={ {
					rewind: true,
					width: '100%',
					height: 300,
					gap: '1rem',
					type: 'loop',
					perPage: 3,
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
		</div>
	)
}