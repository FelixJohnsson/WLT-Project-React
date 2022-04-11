import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import '../Styling/Home.css'

export const NewWorkout = () => {
	return (
		<div id="new-workout-container">
			<h1>New workout</h1>
			<Card className="new-workout-card">
				<div className="new-workout-card-name-description">
					<Input fullWidth={false} margin={'dense'} maxRows="1" placeholder={'Name'}/>
					<Input fullWidth={false} margin={'dense'} maxRows="1" placeholder={'Description'}/>
				</div>
				<div className="next-workout-card-kg-rep">
					<div>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
					<div>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="KG"/> 
							<i>x</i>
						<Input fullWidth={false} margin={'dense'} className="short-input" maxRows="3" placeholder="REP"/> 
					</div>
				</div>
			</Card>
		</div>
	)
}