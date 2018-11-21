import React, {Component} from "react";


class RandomNumber extends Component {
    state = {
        number: 0
      }
  
    generateNumber = (min, max) => {
        const rndNum = Math.floor(Math.random()*(max-min+1)+min);
        this.setState({
          number: rndNum
        });
        console.log(rndNum);

        return rndNum
      };
     
      componentDidMount() {
          this.generateNumber(19, 120)
      }  
      

      render() {
        return (
          <div className="generator">
            <p className="rNum">Target number = {this.state.number}</p>
          </div>
        );
      }
    }

  
export default RandomNumber;