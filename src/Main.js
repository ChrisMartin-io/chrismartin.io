import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    console.log(this.props.changeNav);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.changeNav();
  }
  handleScroll2 = e => {
    if (window.scrollY > 400) {
      this.props.changeNav();
      console.log('hi');
    }
  }

  render() {
    return (
      <div className="main">
        Main
        <button onClick={this.props.changeNav}>Button</button>
      </div>
    );
  }
}

export default Main;
