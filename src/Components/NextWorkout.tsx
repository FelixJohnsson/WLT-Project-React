import { useEffect, useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Workout } from "../Types"
import { WorkoutCard } from "./WorkoutCard"
import '../Styling/NextWorkout.css'

export const NextWorkout = (props:any) => {
	const [workoutOrder, setWorkoutOrder] = useState([])
	const [nextWorkoutOrder, setNextWorkoutOrder] = useState([])
	useEffect(() => {
		if(props.userData != null){
			setWorkoutOrder(props.userData.workouts)
		}
		}, [props.userData])
	const onDragEnd = (result:any) => {
	console.warn(result)

		if (result.destination.droppableId === 'next-workout'){
			nextWorkoutOrder.push(workoutOrder[result.source.index])
			setNextWorkoutOrder(nextWorkoutOrder)

			const items = Array.from(workoutOrder)
			items.splice(result.source.index, 1)
			setWorkoutOrder(items)
		} else {
			const items = Array.from(workoutOrder)
			const [reorderitem] = items.splice(result.source.index, 1)
			items.splice(result.destination.index, 0, reorderitem)
			setWorkoutOrder(items)
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
								{workoutOrder.map((workout:Workout, index:number) => {
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