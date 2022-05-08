import { UserData, Workout } from "../Types"
import { WorkoutCard } from "./WorkoutCard"
import Button from '@mui/material/Button'

import '../Styling/StartWorkout.css'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useEffect, useState } from "react"

export const StartWorkout = (props: any) => {
	const serverURL = 'http://localhost:5000'
	const { userData, dateString, chosenWorkout } = props

	const [userSchedule, setUserSchedule] = useState([])
	useEffect(() => {
		fetch(`${serverURL}/get_schedule/${userData.username}/${dateString}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
				}
				})
				.then(res => res.json())
				.then((data:any) => {
					console.log(data)
					setUserSchedule(data.data.workouts)
				}
				)
				.catch(err => console.log(err))
	}, [dateString, userData.username]) // @TODO ADD TO LOCALSTORAGE

	return (
		<div>
			<h1>{dateString}</h1>
			<div id="startWorkoutContainer">
			{userSchedule.map((workout: any, index: number) => {
					return (
						<div className='startWorkoutCard'>
							<WorkoutCard workout={workout} key={index}/>
							<Button variant="outlined">Start</Button>
						</div>
					)
				})}
			</div>
		</div>
	)
}