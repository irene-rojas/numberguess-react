import React, { Component } from 'react';
import './App.css';
import Buttons from "./components/Buttons/Buttons";


class App extends Component {

  targetNumber = (min, max) => {
    const targetNum = Math.floor(Math.random()*(max-min+1)+min);
    console.log(targetNum);

    return targetNum
  };

  state = {
    targetNumber: this.targetNumber(19, 120),
    currentValue: 0,
    gamesWon: 0,
  };

    handleClick = (event) => {
        event.preventDefault();
        const currentValue = this.state.currentValue;
        const newValue = parseInt(event.target.getAttribute("value"));
        this.setState(
            {currentValue: currentValue + newValue}
        )
        // console.log(newValue);
        // code above works fine
    }

    componentDidUpdate() {
      if (this.state.currentValue === this.state.targetNumber) {
        this.setState(
            {
              targetNumber: this.targetNumber(19, 120),
              currentValue: 0,
              gamesWon: this.state.gamesWon + 1
            }
        )
          return (
            <Buttons />
          )
      }
      else {
          if (this.state.currentValue >= this.state.targetNumber) {
              this.setState(
                  {
                    targetNumber: this.targetNumber(19, 120),
                    currentValue: 0,
                    gamesWon: this.state.gamesWon
                  }
              )
              return (
                <Buttons />
              )
          }
      }
    }


  render() {
    return (

      <div className="App">

      <div className="targetNumber">
        Target number = {this.state.targetNumber}

        <div className="currentValue">
            Current value = {this.state.currentValue}
            <br></br>
            Games won = {this.state.gamesWon}
        </div>
      </div>

        <div className="buttonGrid">
            <Buttons onClick={this.handleClick} />
        </div>

        <img src={require("./images/frame.png")} alt="picture frame" />

      </div>
    );
  }
}

export default App;
