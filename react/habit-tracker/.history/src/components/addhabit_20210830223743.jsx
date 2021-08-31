import React, { Component } from "react";

class Addhabit extends Component {
  render() {
    return (
      <form className="add-form" onSubmit={this.addItem}>
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Addhabit;
