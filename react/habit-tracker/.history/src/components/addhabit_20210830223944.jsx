import React, { Component } from "react";

class Addhabit extends Component {
  inputRef = React.createRef();
  addItem = () => {};
  render() {
    return (
      <form className="add-form" onSubmit={this.addItem}>
        <input
          ref="addItem"
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Addhabit;
