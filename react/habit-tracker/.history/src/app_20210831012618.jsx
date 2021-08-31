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
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
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

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.forEach((habit) => {
      habit.count = 0;
    });
    this.setState({ habits });
  };

  onAddItem = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalScore={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          OnIncrement={this.handleIncrement}
          Ondecrement={this.handledecrement}
          OnDelete={this.handleDelete}
          onAddItem={this.onAddItem}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
