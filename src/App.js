import React, { Component } from 'react';
import './App.css';
import RandomNumber from "./components/RandomNumber/RandomNumber";
import Buttons from "./components/Buttons/Buttons";

class App extends Component {

  state = {
    // random: "",
    currentValue: 0,
    gameScore: 0,
    totalScore: 0
  };


  render() {
    return (
      <div className="App">

        <RandomNumber />

        <Buttons />


      </div>
    );
  }
}

export default App;
