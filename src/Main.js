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
      <div className="about">
        <h2 className="about">About me</h2>
        <p>
          I'm Chris and I live in San Francisco. I love music, sports, design & coding. Working with others towards a common goal is <i>the best</i>.
        </p>
        <h3>
          Technologies
        </h3>
        <p>Javascript, Python, SQL, Ruby, HTML, CSS</p>
        <p>React, Redux, Node, Express, Flask, PostgreSQL, SQLAlchemy, Jest, Git</p>
        <img
          src={require('./img/chris.png')}
          alt="Chris"
          className="about"
        ></img>
      </div>
    );
  }
}

export default Main;
