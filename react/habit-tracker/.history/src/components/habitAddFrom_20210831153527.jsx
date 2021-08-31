import React from "react";

const HabitAddFrom = (props) => {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onhandleAddItem(name);
    this.formRef.current.reset();
  };
  return (
    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
      <input
        ref={this.inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onhandleAddItem(name);
    this.formRef.current.reset();
  };
}

export default HabitAddForm;
