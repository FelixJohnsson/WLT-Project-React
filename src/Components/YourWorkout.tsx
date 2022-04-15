export const YourWorkout = () => {
	const serverURL = 'http://localhost:5000'

		fetch(`${serverURL}/get_workouts/:username`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		})

	return (
		<div>
			<h1>Your workouts</h1>
		</div>
	)
}