
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
  }

  getHeadHeight(div) {
    console.log(div);
  }
  changeNav() {
    console.log('change now');
  }

  render() {
    return (
      <>
        <Navbar />
          <Hamburger />
        <Head />
        <Main changeNav={this.changeNav} />
      </>
    );
  }
}

export default App;
