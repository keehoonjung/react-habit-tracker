import React, { Component } from "react";

class Addhabit extends Component {
  render() {
    return (
      <div className="add-form">
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button" onClick={this.addItem}>
          Add
        </button>
      </div>
    );
  }
}

export default Addhabit;
