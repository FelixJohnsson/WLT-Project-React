import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { Input } from '@mui/material'
import Button from '@mui/material/Button'
import './register.css'

export const Register = () => {
	const navigate = useNavigate()
	const serverURL = 'http://localhost:5000'
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(<i id="error-message-hidden">Error message</i>)

	const handleRegister = () => {
		fetch(`${serverURL}/add_user`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password,
			})
		})
		.then(res => res.json())
		.then((data) => {
			if(data.status === 200) return navigate("/")
			else{
				setError(<i id="error-message-shown">{data.message}</i>)
				setPassword('')
				setTimeout(() => {
					setError(<i id="error-message-hidden">Error message</i>)
				}, 3000)
			}
		})
		.catch(err => console.log(err))
	}

	return (
		<div id="app-register">
			<div>
			</div>
			<div id="register-div">
				<Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
				<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
				{error}
				<Button onClick={handleRegister}>Register</Button>
			</div>	
		</div>
	)
}