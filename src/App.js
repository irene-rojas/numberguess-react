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

      <div className="randomNumber">
        <RandomNumber />
      </div>

      <div className="buttonGrid">
        <Buttons />
      </div>

      {/* <div className="instructions">
        Note the randomly generated number in XXX. Each of cats has been randomly assigned a number. Click them to reach your target score.
      </div> */}

      </div>
    );
  }
}

export default App;
