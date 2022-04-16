import { UserData, Workout } from "../Types"

export const YourWorkout = (props:any) => {
	const serverURL = 'http://localhost:5000'

	console.log(props.userData)

	return (
		<div>
			<h1>Your workouts</h1>
			{props.userData.workouts.map((workout:Workout) => {
				return (
					<div>
						<h2>{workout.name}</h2>
						<p>{workout.category}</p>
						<p>{workout.description}</p>

						<p>{workout.notes}</p>
						<p>{workout.status}</p>
					</div>
				)
			})}
		</div>
	)
}