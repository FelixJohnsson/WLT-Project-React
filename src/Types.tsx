export enum Status {
	'complete' = 'complete',
	'done' = 'done',
	'invalid' = 'invalid',
	'retired' = 'retired'
}

export enum WorkoutCategory {
	'Chest' = 'Chest',
	'Back' = 'Back',
	'Legs' = 'Legs',
	'Shoulders' = 'Shoulders',
	'Tricep' = 'Tricep',
	'Biceps' = 'Biceps',
	'Abs' = 'Abs',
	'Cardio' = 'Cardio',
	'Other' = 'Other'
}

export type UserData = {
	username: string,
	internal_id: string,
	socket: string | null,
	latest_connect: string,
	first_connection: string,
	workouts: any[],
	workouts_count: number,
}

export type Workout = {
	name: string,
	description: string,
	category: WorkoutCategory,
	internal_id: string,
	sets?: number[],
	reps?: number[],
	weight?: number[],
	notes?: string,
	status: Status,
	username: string
}

export type WorkoutInSchedule = {
	name: string,
	description: string,
	category: WorkoutCategory,
	internal_id: string,
	sets?: number[],
	reps?: number[],
	weight?: number[],
	notes?: string,
	status: Status,
	username: string
	dateString: string
}

export interface SuccessfulUserData {
	message: string,
	status: 200,
	data: UserData
}

export interface ErrorLoginData {
	message: 'Wrong password or username',
	status: 401,
}