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
    const habits = [...this.state.habits];
    const input = document.querySelector("input");
    console.log(this.newID());
    const newItem = { id: this.newID(), name: input.value, count: 0 };
    habits.push(newItem);
    input.value = "";
    this.setState({ habits });
  };

  resetAll = () => {
    const habits = [...this.state.habits];
  };

  newID = () => {
    return Math.floor(Math.random() * (10000 - 4) + 4);
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
        <button className="reset-button" onClick={this.resetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
