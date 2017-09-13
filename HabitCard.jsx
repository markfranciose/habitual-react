import React from 'react';
import QuickStats from './QuickStats'

class HabitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cardClicked: false}
  }

  render(){
    return(
      <div className='habit-card'>
         <h3>{this.props.habit.name}</h3> 
         <h4>{this.props.habit.frequencyType}</h4>
         { this.state.cardClicked && <QuickStats />}
      </div>
    )
  }

}
