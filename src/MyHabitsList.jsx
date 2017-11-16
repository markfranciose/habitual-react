import React from 'react';
import preload from 'habits.json';
import HabitCard from './HabitCard';

const MyHabitsList = (props) => (
	<div id="habits-list-container">
	  {preload.habits
		.map(habit => <HabitCard habit={habit} />)}
	</div>	
)

export default MyHabitsList;
