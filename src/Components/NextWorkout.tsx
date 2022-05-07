import { useEffect, useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { SuccessfulUserData, Workout, WorkoutInSchedule } from "../Types"
import { WorkoutCard } from "./WorkoutCard"
import '../Styling/NextWorkout.css'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';

export const NextWorkout = (props:any) => {
	console.log(props)
	const serverURL = 'http://localhost:5000'
	const [allWorkoutsOrder, setAllWorkoutsOrder] = useState([])
	const [nextWorkoutOrder, setNextWorkoutOrder] = useState([])
	useEffect(() => {
		if(props.userData != null){
			setAllWorkoutsOrder(props.userData.workouts)
		}
	}, [props.userData])

type WorkoutDragObject = {
	draggableId: string
	type: string
	source: {
		index: number
		droppableId: 'next-workout' | 'all-workouts'
	}
	reason: string
	mode: string
	destination: {
		index: number
		droppableId: 'next-workout' | 'all-workouts'
	}
	combine: null
}

	const moveTo = (draggableObject:WorkoutDragObject) => {
		if (draggableObject.destination.droppableId === 'next-workout'){
			const newNextWorkoutOrder = [...nextWorkoutOrder]
			const newItem = allWorkoutsOrder[draggableObject.source.index]
			newNextWorkoutOrder.splice(draggableObject.destination.index, 0, newItem)
			setNextWorkoutOrder(newNextWorkoutOrder)
			props.setChosenWorkouts(newNextWorkoutOrder)
		}
		if (draggableObject.destination.droppableId === 'all-workouts'){
			const newAllWorkoutsOrder = [...allWorkoutsOrder]
			const newItem = nextWorkoutOrder[draggableObject.source.index]
			newAllWorkoutsOrder.splice(draggableObject.destination.index, 0, newItem)
			setAllWorkoutsOrder(newAllWorkoutsOrder)
		}
	}

	const moveFrom = (draggableObject:WorkoutDragObject) => {
		if (draggableObject.source.droppableId === 'next-workout'){
			const items = Array.from(nextWorkoutOrder)
			items.splice(draggableObject.source.index, 1)
			setNextWorkoutOrder(items)
		}
		if (draggableObject.source.droppableId === 'all-workouts'){
			const items = Array.from(allWorkoutsOrder)
			items.splice(draggableObject.source.index, 1)
			setAllWorkoutsOrder(items)
		}
	}

	const rearrange = (draggableObject:WorkoutDragObject) => {
		if(draggableObject.destination.droppableId === 'next-workout'){
			const newNextWorkoutOrder = [...nextWorkoutOrder]
			const itemBeingMoved = newNextWorkoutOrder[draggableObject.source.index]
			newNextWorkoutOrder.splice(draggableObject.source.index, 1)
			newNextWorkoutOrder.splice(draggableObject.destination.index, 0, itemBeingMoved)
			setNextWorkoutOrder(newNextWorkoutOrder)
		} else {
			const newAllWorkoutsOrder = [...allWorkoutsOrder]
			const itemBeingMoved = newAllWorkoutsOrder[draggableObject.source.index]
			newAllWorkoutsOrder.splice(draggableObject.source.index, 1)
			newAllWorkoutsOrder.splice(draggableObject.destination.index, 0, itemBeingMoved)
			setAllWorkoutsOrder(newAllWorkoutsOrder)
		}
	}

	const onDragEnd = (result:any) => {
		if (result.destination.droppableId === result.source.droppableId) rearrange(result)
		else {
			moveTo(result)
			moveFrom(result)
		}
	}

	const handleNextWorkoutSubmit = () => {

		const addDateToWorkouts = nextWorkoutOrder.map((workout:WorkoutInSchedule) => {
			workout.dateString = props.dateString
			return workout
		})
			
		fetch(`${serverURL}/save_new_schedule_entry/`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				},
			body: JSON.stringify({
				username: props.userData.username,
				scheduleEntry: addDateToWorkouts,
				dateString: props.dateString
			})
				})
				.then(res => res.json())
				.then((data:SuccessfulUserData) => {
					console.log(data)
				}
				)
				.catch(err => console.log(err))
	}

	return (
		<div>
			<h1>{props.dateString}</h1>
			<div id="your-workouts-container">
				<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="next-workout" direction="horizontal">
						{(provided) => (
							<div className="droppable-container" {...provided.droppableProps} ref={provided.innerRef}>
								{nextWorkoutOrder.map((workout:Workout, index:number) => {
									return (
										<Draggable key={workout.internal_id} draggableId={workout.internal_id} index={index}>
											{(provided) => (
												<div className="draggable-container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
													<WorkoutCard workout={workout} />
												</div>
											)}
										</Draggable>
									)
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Button variant="outlined" endIcon={<SendIcon />} onClick={handleNextWorkoutSubmit}>Submit next workout plan</Button>
					<h1>All workouts</h1>
					<Droppable droppableId="all-workouts" direction="horizontal">
						{(provided) => (
							<div className="droppable-container" {...provided.droppableProps} ref={provided.innerRef}>
								{allWorkoutsOrder.map((workout:Workout, index:number) => {
									return (
										<Draggable key={workout.internal_id} draggableId={workout.internal_id} index={index}>
											{(provided) => (
												<div className="draggable-container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
													<WorkoutCard workout={workout} />
												</div>
											)}
										</Draggable>
									)
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>

				</DragDropContext>
			</div>
		</div>
	)
}

