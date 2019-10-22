// imports
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Head from './Head';
import Hamburger from './Hamburger';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeNav = this.changeNav.bind(this);
    this.state = {
      hamburger: false
    };

    this.hamburgerOff = this.hamburgerOff.bind(this);
    this.hamburgerOn = this.hamburgerOn.bind(this);
  }

  hamburgerOff() {
    console.log('hamburger Off');
    this.setState({
      hamburger: false
    });
  }

  hamburgerOn() {
    console.log('hamburger on');
    this.setState({
      hamburger: true
    });
  }

  handleClick() {
    if (!this.state.hamburger) {
      console.log('hamburger down');
    } else {
      console.log('hamburger is going down');
      this.setState({
        hamburger: false
      });
    }
  }
  getHeadHeight(div) {
    console.log(div);
  }
  changeNav() {
    console.log('change now');
  }

  render() {
    if (this.state.hamburger) {
      return (
        <div onClick={this.hamburgerOff}>
          <Navbar />
          <Hamburger
            hamburger={this.state.hamburger}
            hamburgerOn={this.hamburgerOn}
            hamburgerOff={this.hamburgerOff}
          />
          <Head />
          <Main changeNav={this.changeNav} />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <Hamburger
            hamburger={this.state.hamburger}
            hamburgerOn={this.hamburgerOn}
            hamburgerOff={this.hamburgerOff}
          />
          <Head />
          <Main changeNav={this.changeNav} />
        </div>
      );
    }
  }
}

export default App;
