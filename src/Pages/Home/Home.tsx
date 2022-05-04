import React, {useState, useEffect} from 'react'
import '../../Styling/Home.css'
import { TopNavigation } from '../../Components/TopNavigation'

import { YourWorkout } from '../../Components/YourWorkout'
import { NewWorkout } from '../../Components/NewWorkout'
import { NextWorkout } from '../../Components/NextWorkout'
import { EditWorkout } from '../../Components/EditWorkout'
import { EditSchedule } from '../../Components/EditSchedule'
import { YourProgress } from '../../Components/YourProgress'

import '@splidejs/react-splide/css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SuccessfulUserData, UserData } from '../../Types'

const getDaysInMonth = (month:number, year:number) => {
	const date = new Date(year, month, 1)
	const days = []
	while (date.getMonth() === month) {
	  days.push(new Date(date))
	  date.setDate(date.getDate() + 1)
	}
	return days
  }

export const Home = () => {
	const serverURL = 'http://localhost:5000'
	const [showSplide, setShowSplide] = useState(true)
	const [showingCatergory, setShowingCatergory] = useState('Next workout')
	const [userData, setUserData] = useState<UserData | null>(null)

	const userDetails = JSON.parse(localStorage.getItem('login_data') || '{}')

	useEffect(() => {
		if (showingCatergory === 'Your workouts' || showingCatergory === 'Edit workouts' || showingCatergory === 'Your progress' || showingCatergory === 'New workout') setShowSplide(false)
		if (showingCatergory === 'Next workout' || showingCatergory === 'Edit schedule') setShowSplide(true)

		fetch(`${serverURL}/get_user/${userDetails.username}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
				}
				})
				.then(res => res.json())
				.then((data:SuccessfulUserData) => {
					setUserData(data.data)
					
				}
				)
				.catch(err => console.log(err))
	
	}, [showingCatergory, userDetails.username])

	const datesInMonth = getDaysInMonth(new Date().getMonth(), 2022)

	return (
		<div>
			<h1> { 'Weight lifter tracker' } </h1>
			<TopNavigation categorySelectionDispatcher={setShowingCatergory} selectedCategory={showingCatergory}/>
			{
				showSplide ?
				<Splide
					options={ {
						rewind: true,
						width: '100%',
						height: 200,
						gap: '1rem',
						type: 'loop',
						perPage: 5,
						focus: 'center',
					} }
					>
						{
							datesInMonth.map((workout, index) => {
								console.log(workout)
								return (
									<SplideSlide key={index}>
										<div className='workout-card'>
											<div className='workout-card-text'>
												<p>{`${workout.toDateString()}`}</p>
											</div>
										</div>
									</SplideSlide>
								)
							})

						}
				</Splide>
				: null
			}
			<div id="main-output">
				{showingCatergory === 'Your workouts' ? <YourWorkout userData={userData}/> : null}
				{showingCatergory === 'New workout' ? <NewWorkout userData={userData}/> : null}
				{showingCatergory === 'Next workout' ? <NextWorkout userData={userData}/> : null}
				{showingCatergory === 'Edit workouts' ? <EditWorkout userData={userData}/> : null}
				{showingCatergory === 'Edit schedule' ? <EditSchedule userData={userData}/> : null}
				{showingCatergory === 'Your progress' ? <YourProgress userData={userData}/> : null}
			</div>

		</div>
	)
}







/*


			<div id="next-workout-container">
				<Card className="next-workout-card-selected">
					<div className="next-workout-card-left">
						<p>Bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Incline bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Narrow grip bench press</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Tricep extensions</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
				<Card className="next-workout-card">
					<div className="next-workout-card-left">
						<p>Chest flies</p>
					</div>
					<div className="next-workout-card-right">
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
						<p>
							<Input defaultValue={50} fullWidth={false} margin={'dense'} className="kg-selector" maxRows="3"/> kg 
							<Input defaultValue={10} fullWidth={false} margin={'dense'} className="rep-selector" maxRows="3"/> reps
						</p>
					</div>
				</Card>
			</div>


*/