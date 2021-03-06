import React, {useState, useEffect, useRef} from 'react'
import '../../Styling/Home.css'
import '../../Styling/YourWorkout.css'
import { TopNavigation } from '../../Components/TopNavigation'
import { YourWorkout } from '../../Components/YourWorkout'
import { NewWorkout } from '../../Components/NewWorkout'
import { NextWorkout } from '../../Components/NextWorkout'
import { EditWorkout } from '../../Components/EditWorkout'
import { EditSchedule } from '../../Components/EditSchedule'
import { YourProgress } from '../../Components/YourProgress'
import { StartWorkout } from '../../Components/StartWorkout'

import '@splidejs/react-splide/css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SuccessfulUserData, UserData } from '../../Types'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

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
	const datesInMonth = getDaysInMonth(new Date().getMonth(), 2022)

	const [showSplide, setShowSplide] = useState(true)
	const [showingCategory, setShowingCategory] = useState('Next workout')
	const [userData, setUserData] = useState<UserData | null>(null)
	const [userSchedule, setUserSchedule] = useState<any>(null)
	const [onDateNumber, setOnDateNumber] = useState<number>(new Date().getDate()-1)
	const [onDateString, setOnDateString] = useState<string | Date>(datesInMonth[onDateNumber].toDateString())
	const [chosenWorkouts, setChosenWorkouts] = useState<any[]>([])

	const userDetails = JSON.parse(localStorage.getItem('login_data') || '{}')

	useEffect(() => {
		if (showingCategory === 'Your workouts' || showingCategory === 'Edit workouts' || showingCategory === 'Your progress' || showingCategory === 'New workout' || showingCategory === 'Start workout') setShowSplide(false)
		if (showingCategory === 'Next workout' || showingCategory === 'Edit schedule') setShowSplide(true)

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
					setUserSchedule(data.data.schedule)
				}
				)
				.catch(err => console.log(err))
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const ref = useRef<any>()

	const generateMarkers = (workouts: any[]) => {
		return workouts.map((workout:any, chosenIndex) => {
			return (
				<Avatar key={chosenIndex} className={workout.category[0]}>{workout.name.charAt(0)}</Avatar>
			)
		})
	}

	const generateDatesSplide = () => {
		return datesInMonth.map((workout, index) => {
			return (
				<SplideSlide key={index}>
					<div className='workout-date-card'>
						<div className='workout-card-text'>
							<p>{`${workout.toDateString()}`}</p>
							<Stack direction="row" spacing={1}>
							{
								userSchedule?.map((object:any) => {
									if (object.date === workout.toDateString()) {
										return generateMarkers(object.workouts)
									}
									return null
								})
							}
							</Stack>
							{
								onDateNumber === index ?
								
								<Stack direction="row" spacing={1}>
									{
										generateMarkers(chosenWorkouts)
									}
								</Stack>
							: null
							}
						</div>
					</div>
				</SplideSlide>
			)
		})
	}

	return (
		<div>
			<h1> { 'Weight lifter tracker' } </h1>
			<TopNavigation categorySelectionDispatcher={setShowingCategory} selectedCategory={showingCategory}/>
			{
				showSplide ?
				<Splide
					ref={ref}
					onMoved={(e) => {
						setOnDateNumber(e.index)
						setOnDateString(datesInMonth[e.index].toDateString())
					}}
					options={ {
						rewind: true,
						width: '100%',
						height: 200,
						gap: '1rem',
						type: 'loop',
						perPage: 5,
						focus: 'center',
						start: onDateNumber
					} }
					>
					{generateDatesSplide()}
				</Splide>
				: null
			}
			<div id="main-output">
				{showingCategory === 'Your workouts' ? <YourWorkout userData={userData}/> : null}
				{showingCategory === 'New workout' ? <NewWorkout userData={userData}/> : null}
				{showingCategory === 'Next workout' ? <NextWorkout userData={userData} dateString={onDateString} setChosenWorkouts={setChosenWorkouts}/> : null}
				{showingCategory === 'Edit workouts' ? <EditWorkout userData={userData}/> : null}
				{showingCategory === 'Edit schedule' ? <EditSchedule userData={userData}/> : null}
				{showingCategory === 'Your progress' ? <YourProgress userData={userData}/> : null}
				{showingCategory === 'Start workout' ? <StartWorkout userData={userData} dateString={onDateString} chosenWorkouts={chosenWorkouts}/> : null}
			</div>

		</div>
	)
}
