import React, { Component } from "react";

class Addhabit extends Component {
  inputRef = React.createRef();
  addItem = () => {
    const name = this.inputRef.current.value;
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.addItem}>
        <input
          ref="inputRef"
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
