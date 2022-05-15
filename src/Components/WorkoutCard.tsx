import React from 'react'

export const WorkoutCard = (props:any) => {
	return (
		<div className={`your-workout-card ${props.workout.category[0].replace(' ', '-')}`}>
			<div className='title-container'>
				<h2>{props.workout.name}</h2>
				<p>{props.workout.category}</p>
			</div>
			<div className='description-container'>
				<p>{props.workout.description}</p>
			</div>
			<div className='notes-container'>
				<p>{props.workout.notes}</p>
			</div>
		</div>
	)
}