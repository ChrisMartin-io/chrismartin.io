import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Head from './Head';


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
      <Head />
      <Main changeNav={this.changeNav}/>
      </>
    )
  }

}

export default App;
