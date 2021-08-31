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
    const habit = [...this.state.habits];
  };
  handledecrement = (habit) => {
    const count = habit.count - 1;
    habit.count = count < 0 ? 0 : count;
    this.setState({ habits: this.state.habits });
  };
  handleDelete = (habit) => {
    const habitIndex = this.state.habits.indexOf(habit);
    this.state.habits.splice(habitIndex, 1);
    this.setState({ habits: this.state.habits });
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
