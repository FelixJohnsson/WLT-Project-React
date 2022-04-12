import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useState } from 'react'
import '../Styling/Home.css'

export const NewWorkout = () => {
	const serverURL = 'http://localhost:5000'

	const [exercise, setExercise] = useState("")
	const [description, setDescription] = useState("")
	const [category, setCategory] = useState('Chest')

	const handleChange = (event: any) => {
		setCategory(event.target.value)
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()
		const newWorkoutData = {
			exercise: exercise,
			description: description,
			category: category
		}
		const user_id = ''

		fetch(`${serverURL}/save_workout/${user_id}`, { //@TODO - change this to the user_id
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newWorkoutData)
		})
	}

	return (
		<div id="new-workout-container">
			<h1>New workout</h1>
			<Card className="new-workout-card">
				<div className="new-workout-card-name-description">
					<Input fullWidth={false} margin={'dense'} maxRows="1" placeholder={'Name'} onChange={(e) => setExercise(e.target.value)}/>
					<Input fullWidth={false} margin={'dense'} maxRows="1" placeholder={'Description'} onChange={(e) => setDescription(e.target.value)}/>
					<InputLabel id="demo-simple-select-label">Category</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={category}
						label="Category"
						onChange={handleChange}
						>
						<MenuItem value={'Chest'}>Chest</MenuItem>
						<MenuItem value={'Tricep'}>Tricep</MenuItem>
						<MenuItem value={'Back'}>Back</MenuItem>
						<MenuItem value={'Bicep'}>Bicep</MenuItem>
						<MenuItem value={'Leg'}>Leg</MenuItem>
						<MenuItem value={'Lower back'}>Lower back</MenuItem>
						<MenuItem value={'Forearm'}>Forearm</MenuItem>
						<MenuItem value={'Shoulder'}>Shoulders</MenuItem>
						<MenuItem value={'Abs'}>Abs</MenuItem>
						<MenuItem value={'Cardio'}>Cardio</MenuItem>
						<MenuItem value={'Other'}>Other</MenuItem>
					</Select>
				</div>
				<div className="next-workout-card-kg-rep">
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<p>You don't have to fill out kg and reps. You can fill it out while you're doing the exercise.</p>
				</div>
			</Card>
			<Button variant="contained" onClick={handleSubmit} className="wide-button">Save</Button>

		</div>
	)
}