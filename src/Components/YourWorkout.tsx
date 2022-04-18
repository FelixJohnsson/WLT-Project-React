import { UserData, Workout } from "../Types"
import Card from '@mui/material/Card'
import '../Styling/YourWorkout.css'

export const YourWorkout = (props:any) => {
	const serverURL = 'http://localhost:5000'

	return (
		<div>
			<h1>Your workouts</h1>
			<div id="your-workouts-container">
				{props.userData.workouts.map((workout:Workout) => {
					let cardColor = ''
					if(workout.category[0] === 'Tricep') cardColor = workout.category[0]
					if(workout.category[0] === 'Chest') cardColor = workout.category[0]
					if(workout.category[0] === 'Back') cardColor = workout.category[0]
					if(workout.category[0] === 'Bicep') cardColor = workout.category[0]
					if(workout.category[0] === 'Legs') cardColor = workout.category[0]
					if(workout.category[0] === 'Cardio') cardColor = workout.category[0]
					if(workout.category[0] === 'Shoulder') cardColor = workout.category[0]
					
					return (
						<Card className={`your-workout-card ${cardColor}`}>
							<h2>{workout.name}</h2>
							<p>{workout.category}</p>
							<p>{workout.description}</p>

							<p>{workout.notes}</p>
							<p>{workout.status}</p>
						</Card>
					)
				})}
			</div>
		</div>
	)
}