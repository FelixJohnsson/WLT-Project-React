import './home.css'
import gym from './gym.png'
import gymStation from './gym-station.png'
import muscle from './muscle.png'
import weightlifter from './weightlifter.png'
import stationaryBike from './stationary-bike.png'
import weights from './weights.png'

export const Home = () => {
	return (
		<div>
			<h1>Know your progress ... </h1>
			<div id="category-selector-div">
				<div className="category-card-unselected">
					<img src={gym} alt="Gym"></img>
				</div>	
				<div className="category-card-unselected">
					<img src={gymStation} alt="Gym"></img>
				</div>
				<div className="category-card-selected">
					<img src={muscle} alt="Gym"></img>
				</div>	
				<div className="category-card-unselected">
					<img src={weightlifter} alt="Gym"></img>
				</div>	
				<div className="category-card-unselected">
					<img src={stationaryBike} alt="Gym"></img>
				</div>	
				<div className="category-card-unselected">
					<img src={weights} alt="Gym"></img>
				</div>	
			</div>
		</div>
	)
}