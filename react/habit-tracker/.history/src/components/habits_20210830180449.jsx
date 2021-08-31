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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index]++;
    this.setState({ habits });
  };
  handledecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index]--;
    this.setState({ haibts });
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
