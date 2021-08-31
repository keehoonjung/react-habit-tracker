import React, { Component } from "react";

class Addhabit extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  addItem = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    this.props.onhandleAddItem(name);
  };
  render() {
    return (
      <form ref=formRef className="add-form" onSubmit={this.addItem}>
        <input
          ref={this.inputRef}
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
