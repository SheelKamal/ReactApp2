import React, { Component } from 'react';
import image from './images/img7.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
         <img src={image} alt="logo" />

      </div>
      
    );
  }
}

export default App;
