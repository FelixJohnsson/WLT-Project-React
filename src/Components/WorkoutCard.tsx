import Card from '@mui/material/Card'

export const WorkoutCard = (props:any) => {
	return (
		<Card
			className={`your-workout-card ${props.workout.category[0]}`}>
			<h2>{props.workout.name}</h2>
			<p>{props.workout.category}</p>
			<p>{props.workout.description}</p>
		</Card>
	)
}