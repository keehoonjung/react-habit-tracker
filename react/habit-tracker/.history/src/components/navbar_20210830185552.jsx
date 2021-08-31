import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="header">
        <i className="fas fa-leaf"></i>
        <span className="header-title">Habit Tracker</span>
        <span className="header-count">{this.props.totalScore}</span>
      </nav>
    );
  }
}

export default Navbar;
