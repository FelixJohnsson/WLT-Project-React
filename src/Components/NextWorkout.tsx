import { useEffect, useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Workout } from "../Types"
import { WorkoutCard } from "./WorkoutCard"
import '../Styling/NextWorkout.css'

export const NextWorkout = (props:any) => {
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

	return (
		<div>
			<h1>Next workout</h1>
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
					<h1>All workout</h1>
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

