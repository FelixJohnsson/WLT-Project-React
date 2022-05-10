import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useState } from 'react'
import '../Styling/Home.css'

export const NewWorkout = (props:any) => {
	const serverURL = 'http://localhost:5000'

	const [exercise, setExercise] = useState("")
	const [description, setDescription] = useState("")
	const [category, setCategory] = useState('Chest')

	const [kg1, setKg1] = useState('')
	const [rep1, setRep1] = useState('')
	const [kg2, setKg2] = useState('')
	const [rep2, setRep2] = useState('')
	const [kg3, setKg3] = useState('')
	const [rep3, setRep3] = useState('')
	const [kg4, setKg4] = useState('')
	const [rep4, setRep4] = useState('')
	const [kg5, setKg5] = useState('')
	const [rep5, setRep5] = useState('')

	const repsAndWeight = [
		{
			weight: kg1,
			rep: rep1,
		},
		{
			weight: kg2,
			rep: rep2,
		},
		{
			weight: kg3,
			rep: rep3,
		},
		{
			weight: kg4,
			rep: rep4,
		},
		{
			weight: kg5,
			rep: rep5,
		}
	]

	const handleChange = (event: any) => {
		setCategory(event.target.value)
	}

	const handleSubmit = (event: any) => {
		const newWorkoutData = {
			username: 'Eternal',
			workout:{
				name: exercise,
				description,
				category,
				repsAndWeight,
				status: '',
				notes: '',
			}
		}

		console.log(newWorkoutData)

		fetch(`${serverURL}/save_workout`, {
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
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="KG" value={kg1} onChange={(e) => setKg1(e.target.value)}/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="REP" value={rep1} onChange={(e) => setRep1(e.target.value)}/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="KG" value={kg2} onChange={(e) => setKg2(e.target.value)}/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="REP" value={rep2} onChange={(e) => setRep2(e.target.value)}/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="KG" value={kg3} onChange={(e) => setKg3(e.target.value)}/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="REP" value={rep3} onChange={(e) => setRep3(e.target.value)}/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="KG" value={kg4} onChange={(e) => setKg4(e.target.value)}/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="REP" value={rep4} onChange={(e) => setRep4(e.target.value)}/> 
					</div>
					<div className="kg-rep-divider">
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="KG" value={kg5} onChange={(e) => setKg5(e.target.value)}/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" placeholder="REP" value={rep5} onChange={(e) => setRep5(e.target.value)}/> 
					</div>
					<p>You don't have to fill out kg and reps. You can fill it out while you're doing the exercise.</p>
				</div>
			</Card>
			<Button variant="contained" onClick={handleSubmit} className="wide-button">Save</Button>

		</div>
	)
}