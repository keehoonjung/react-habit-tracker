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
    habits.forEach((habit) => {
      habit.count = 0;
    });
    this.setState({ habits });
  };

  newID = () => {
    return Math.floor(Math.random() * (10000 - 4) + 4);
  };

  render() {
    return (
      <>
        <Navbar
          totalScore={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <form className="add-form">
          <input type="text" className="input" />
          <button className="habit-input" onClick={this.addItem}>
            Add
          </button>
        </form>
        <Habits
          habits={this.state.habits}
          OnIncrement={this.handleIncrement}
          Ondecrement={this.handledecrement}
          OnDelete={this.handleDelete}
        />
        <button className="reset-button" onClick={this.resetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
