import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

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
        {this.state.habits.map((habit) => (
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
