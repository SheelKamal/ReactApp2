import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">
      <a href="/" className="navbar-brand">
            <img src={logo} className="App-logo" alt="logo" />
      </a>
      <ul className="nav navbar-nav">
      <li><a href="/">Page1</a></li>
      <li><a href="/#about">About</a></li>

      </ul>

      </div>
      </nav>
    );
  }
}

export default Header;