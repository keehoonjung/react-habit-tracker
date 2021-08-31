import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddFrom";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onhandleAddItem={this.props.onAddItem} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              OnhandleIncrement={this.props.OnIncrement}
              Onhandledecrement={this.props.Ondecrement}
              OnhandleDelete={this.props.OnDelete}
            />
          ))}
        </ul>
        <button className="reset-button" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
