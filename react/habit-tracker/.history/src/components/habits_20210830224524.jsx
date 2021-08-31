import React, { Component } from "react";
import Addhabit from './addhabit';
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
        <></>
        <Addhabit/>
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            OnhandleIncrement={this.props.OnIncrement}
            Onhandledecrement={this.props.Ondecrement}
            OnhandleDelete={this.props.OnDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
