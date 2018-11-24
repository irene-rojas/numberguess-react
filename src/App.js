import React, { Component } from 'react';
import './App.css';
import RandomNumber from "./components/RandomNumber/RandomNumber";
import Buttons from "./components/Buttons/Buttons";


class App extends Component {

  state = {
    randomNumber: RandomNumber,
    currentValue: 0,
    gameScore: 0,
    totalScore: 0,
  };
  
  // do I setState to a new currentValue each time the buttons are clicked?
  // need handleBtnClick function
  handleClick = (event) => {
    event.preventDefault();
    console.log('meow');
  }

  render() {
    return (

      <div className="App">

      <div className="randomNumber">
        <RandomNumber />
      </div>

      <div className="buttonGrid">
        <Buttons onClick={this.handleClick}/>
      </div>

      <div className="currentValue">
        Current value = {this.state.currentValue}
      </div>

      {/* <div className="instructions">
        Note the randomly generated number in XXX. Each of cats has been randomly assigned a number. Click them to reach your target score.
      </div> */}

      </div>
    );
  }
}

export default App;
