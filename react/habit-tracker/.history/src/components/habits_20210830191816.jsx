import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.OnIncrement(habit);
  };
  handledecrement = (habit) => {
    this.props.Ondecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.OnDelete(habit);
  };
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            OnhandleIncrement={this.handleIncrement}
            Onhandledecrement={this.handledecrement}
            OnhandleDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
