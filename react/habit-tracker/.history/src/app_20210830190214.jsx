import React, { Component } from "react";
import { textChangeRangeIsUnchanged } from "typescript";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
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
    habits[index].count++;
    this.setState({ habits });
  };
  handledecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  addItem = () => {
    const input = document.querySelector("input");
    const newItem = { id: this.newID, name: input.value, count: 0 };
  };
  newID = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  render() {
    return (
      <>
        <Navbar
          totalScore={this.state.habits.reduce((prev, curr) => {
            return prev + curr.count;
          }, 0)}
        />
        <div className="input-container">
          <input type="text" className="input" />
          <button className="habit-input" onClick={this.addItem}>
            Add
          </button>
        </div>
        <Habits
          habits={this.state.habits}
          OnhandleIncrement={this.handleIncrement}
          Onhandledecrement={this.handledecrement}
          OnhandleDelete={this.handleDelete}
        />
        <button className="reset-button">Reset All</button>
      </>
    );
  }
}

export default App;
