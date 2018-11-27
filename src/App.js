import React, { Component } from 'react';
import './App.css';
import RandomNumber from "./components/RandomNumber/RandomNumber";
import Buttons from "./components/Buttons/Buttons";


class App extends Component {

  state = {
    randomNumber: RandomNumber,
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
        if (this.state.currentValue === this.state.randomNumber) {
            this.setState(
                {gamesWon: this.state.gamesWon + 1}
            )
        }
        else {
            if (this.state.currentValue >= this.state.randomNumber) {
                this.setState(
                    {gamesWon: this.state.gamesWon - 1}
                )
            }
        }
    }

  render() {
    return (

      <div className="App">

      <div className="randomNumber">
        <RandomNumber />

        <div className="currentValue">
            Current value = {this.state.currentValue}
            <br></br>
            Games won = {this.state.gamesWon}
        </div>
      </div>

        <div className="buttonGrid">
            <Buttons onClick={this.handleClick} />
        </div>

      </div>
    );
  }
}

export default App;
