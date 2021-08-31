import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.OnhandleIncrement(habit);
  };
  handledecrement = (habit) => {
    this.props.OnhandleDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.OnhandleDelete(habit);
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
