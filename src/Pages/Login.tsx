import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import './Login.css';

export const Login = () => {
	return (
		<div id="app-login">
			<div>
			</div>
			<div id="login-div">
				<Input placeholder="Username"/>
				<Input placeholder="Password"/>
				<Button>Login</Button>
					<div id="login-register-div">
						<a href="/register">Register</a>
						<a href="/">Forgot Password</a>
					</div>
			</div>	
		</div>
	)
}