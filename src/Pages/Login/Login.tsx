import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import { Input } from '@mui/material'
import Button from '@mui/material/Button'
import '../../Styling/Login.css'
import { ErrorLoginData, SuccessfulUserData } from '../../Types'

export const Login = () => {
	const navigate = useNavigate()
	const serverURL = 'http://localhost:5000'

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(<i id="error-message-hidden">Error message</i>)

	const handleLogin = () => {
		fetch(`${serverURL}/login`, {
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
		.then((data:SuccessfulUserData | ErrorLoginData) => {
			if(data.status === 200){
				localStorage.setItem('login_data', JSON.stringify(data.data))
				return navigate("/home")
			}
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

	useEffect(() => {
		const listener = (event:any) => {
		  if (event.code === "Enter" || event.code === "NumpadEnter") {
			event.preventDefault();
			handleLogin()
		  }
		};
		document.addEventListener("keydown", listener);
		return () => {
		  document.removeEventListener("keydown", listener);
		};
	  }, [username, password]);

	return (
		<div id="app-login">
			<div>
			</div>
			<div id="login-div">
				<Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
				<Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
				{error}
				<Button onClick={handleLogin}>Login</Button>
					<div id="login-register-div">
						<a href="/register">Register</a>
						<a href="/">Forgot Password</a>
					</div>
			</div>	
		</div>
	)
}