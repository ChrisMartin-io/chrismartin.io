import React, { Component } from "react";
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Drawer = styled.div`
  position: absolute;
  height: 200px;
  background: grey;
  width: 30vh;
  right: ${props => props.right}vh;
  top: 0;
`;

const Link = styled.div`
  cursor: pointer;
  padding: 5px 0em 1em 2em;
  padding-left: 10px;
  color: white;
  font-weight: 400;

  :hover {
    font-weight: bold;
  }
`;

const MenuHeader = styled.div`
  cursor: pointer;
  color: white;
  font-weight: 800;
  padding: 0;
  padding-left: 10px;
`;

class Hamburger extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toggleState: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {

    if (!this.props.hamburger) {
      this.setState({
        toggleState: 0
      })
    }
  }

  handleClick() {
    this.refs.container.classList.toggle('change');
    this.setState({
      toggleState: this.state.toggleState ? 0 : 1
    });
    if (!this.props.hamburger) {
      this.props.hamburgerOn();
    }
    else {
      this.props.hamburgerOff();
    }
  }
  render() {
    console.log('hamburger state', this.props.hamburger)
    console.log('props',this.props)
    return (
      <div
        className="hamburger-container"
        ref="container"
        onClick={this.handleClick}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />

        <Motion
          defaultStyle={{ right: -40 }}
          style={{
            right: spring(this.state.toggleState ? -14 : -40, {
              stiffness: 70,
              damping: 10
            })
          }}
        >
          {style => (
            <Drawer right={style.right}>
              <Link>
                {' '}
                <img className="menu" src={require('./img/c.png')} alt="logo" />
              </Link>
              <MenuHeader>Projects</MenuHeader>
              <hr className="menu"></hr>
              <Link>r13 Resource</Link>
              <Link>Lie to Me</Link>
            </Drawer>
          )}
        </Motion>
      </div>
    );
  }
}

export default Hamburger;