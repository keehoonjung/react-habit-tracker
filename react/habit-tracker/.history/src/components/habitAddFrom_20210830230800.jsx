import React, { PureComponent } from "react";

class Addhabit extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    this.props.onhandleAddItem(name);
    this.formRef.current.reset();
  };
  render() {
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
  }
}

export default Addhabit;
