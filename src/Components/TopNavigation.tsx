import singleDumbbell from '../assets/images/single-dumbbell.png'
import gymStation from '../assets/images/gym-station.png'
import muscle from '../assets/images/muscle.png'
import weightlifter from '../assets/images/weightlifter.png'
import stationaryBike from '../assets/images/stationary-bike.png'
import weights from '../assets/images/weights.png'

export const TopNavigation = () => {
	return (
		<div id="category-selector-div">
				<div className="category-card-unselected">
					<img src={singleDumbbell} alt="Gym"></img>
					<p>Your workouts</p>
				</div>	
				<div className="category-card-unselected" onClick={() => {console.log('New workout')}}>
					<img src={gymStation} alt="Gym"></img>
					<p>New workout</p>
				</div>
				<div className="category-card-selected">
					<img src={muscle} alt="Gym"></img>
					<p>Next workout</p>
				</div>	
				<div className="category-card-unselected">
					<img src={weightlifter} alt="Gym"></img>
					<p>Edit workouts</p>
				</div>	
				<div className="category-card-unselected">
					<img src={stationaryBike} alt="Gym"></img>
					<p>Edit schedule</p>
				</div>	
				<div className="category-card-unselected">
					<img src={weights} alt="Gym"></img>
					<p>Your progress</p>
				</div>	
			</div>
	)
}