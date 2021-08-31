import React, { Component } from "react";
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

  render() {
    return (
      <>
        <Navbar />
        <div className="input-container">
          <input type="text" className="input" />
          <button className="habit-input">Add</button>
        </div>
        <Habits
          key={1}
          habit={habit}
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
