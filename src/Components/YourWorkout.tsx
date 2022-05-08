import { UserData, Workout } from "../Types"
import { WorkoutCard } from "./WorkoutCard"

import '../Styling/YourWorkout.css'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useState } from "react"

export const YourWorkout = (props:any) => {
	const [workoutOrder, setWorkoutOrder] = useState(props.userData.workouts)
	
	const onDragEnd = (result:any) => {
		const items = Array.from(workoutOrder)
		const [reorderitem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderitem)
		setWorkoutOrder(items)
	}

	return (
		<div>
			<h1>Your workouts</h1>
			<div id="your-workouts-container">
				<DragDropContext onDragEnd={onDragEnd}>
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