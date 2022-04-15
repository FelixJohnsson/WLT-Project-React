export interface SuccessfulLoginData {
	message: 'Login successful',
	status: 200,
	data: {
		username: string,
		internal_id: string,
		socket: string | null,
		latest_connect: string,
		first_connection: string
	}
}

export interface ErrorLoginData {
	message: 'Wrong password or username',
	status: 401,
}