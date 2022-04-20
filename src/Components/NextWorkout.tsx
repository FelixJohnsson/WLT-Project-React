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
	console.warn(props)
	const onDragEnd = (result:any) => {
		if (result.destination.droppableId === 'content2'){
			nextWorkoutOrder.push(workoutOrder[result.source.index])
			setNextWorkoutOrder(nextWorkoutOrder)
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
				<Droppable droppableId="content2" direction="horizontal">
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
					<Droppable droppableId="content" direction="horizontal">
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