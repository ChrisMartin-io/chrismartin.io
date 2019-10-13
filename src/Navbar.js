import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {

  }
  menuLoad() {

  }
  render() {


    return (
      <div className="navbar">
        <div className="menu-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          {this.menuLoad()}
        </div>
        </div>
    );
  }
}

export default Navbar;