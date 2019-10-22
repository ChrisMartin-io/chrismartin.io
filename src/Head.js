import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      random: true
    };

    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount() {
    // Event listener for window resize
    window.addEventListener('resize', this.resize);
    var height = this.divElement.clientHeight;
    this.setState({ height });
    console.log(this.state.height)
  }

  handleStartClick() {
    console.log('click');
    console.log('height', this.state.height);
    window.scroll({ top: this.state.height, left: 0, behavior: "smooth" })
  }

  updateHeight() {
    this.setState({ random: false });
    var height = this.divElement.clientHeight;
    this.setState({ height });
    console.log(this.state.height);
  }

  resize = () => {
    this.forceUpdate();
    this.updateHeight();
  };

  getHeadHeight() {
    console.log(this.props.getHeadHeight(this.state));
  }
  render() {
    return (
      <div className="head" ref={divElement => (this.divElement = divElement)}>
        <div className="container">
          <p className="head">Head Height: {this.state.height}</p>

          <h1>Chris Martin</h1>
          <span className="font-awesome" role="img" aria-label="hand-wave">
            🖖
          </span>
          <p className="head">
            Hi! I'm a full-stack developer currently enrolled at Rithm Bootcamp
            in San Francisco. Below are some projects of mine, please take a
            look!
          </p>
          <p className="head-react">Built in React</p>
          <div className="react-container">
            <span className="react-logo">
              <span className="nucleo"></span>
            </span>
          </div>
        </div>
        <div className="bottom-div">
            <div className="bottom-link" onClick={this.handleStartClick}>
              <h4 className="head">Get started</h4>
              <FontAwesomeIcon className="font-awesome" icon={faCaretDown} />
            </div>
          <p className="attribute">
            {' '}
            <a href="https://www.freepik.com/free-photos-vectors/background">
              vector created by rawpixel.com
            </a>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default Head;
