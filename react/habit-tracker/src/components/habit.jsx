import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.OnhandleIncrement(this.props.habit);
  };

  handledecrement = () => {
    this.props.Onhandledecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.OnhandleDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handledecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
