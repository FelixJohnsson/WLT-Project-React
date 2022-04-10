import './home.css'
import gym from './gym.png'
import gymStation from './gym-station.png'
import muscle from './muscle.png'
import weightlifter from './weightlifter.png'
import stationaryBike from './stationary-bike.png'
import weights from './weights.png'

import Card from '@mui/material/Card';
import Input from '@mui/material/Input';

export const Home = () => {
	return (
		<div>
			<h1>Know your progress ... </h1>
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