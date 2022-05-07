import { UserData, Workout } from "../Types"
import { WorkoutCard } from "./WorkoutCard"

import '../Styling/YourWorkout.css'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useState } from "react"

export const StartWorkout = (props: any) => {
	const { userData, dateString, chosenWorkout } = props
	console.log(chosenWorkout)
	return (
		<div>
			<h1>{dateString}</h1>
		</div>
	)
}