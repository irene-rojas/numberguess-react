import React, { Component } from "react";
import Button from "../Button/Button";
// import images from "../Button/images";
import black from "../Button/images/black_cat.png";
import brown from "../Button/images/brown_cat.png";
import gray from "../Button/images/gray_cat.png";
import yellow from "../Button/images/yellow_cat.png";


class Buttons extends Component {

    state = {
        buttons: [
            {
                id: "black",
                src: black,
                alt: "blackBtn",
                value: ""
            },
            {
                id: "brown",
                src: brown,
                alt: "brownBtn",
                value: ""
            },
            {
                id: "gray",
                src: gray,
                alt: "grayBtn",
                value: ""
            },
            {
                id: "yellow",
                src: yellow,
                alt: "yellowBtn",
                value: ""
            }
        ]
    };

    generateNumber = (min, max) => {
        const rndNumBtn = Math.floor(Math.random()*(max-min+1)+min);
        this.setState({
          value: rndNumBtn
        });
        console.log(rndNumBtn);

        // return rndNumBtn
      };
     
      componentDidMount() {
          this.generateNumber(1, 12)
      }  


    render() {
        return (
            <div className="imageGrid">

                {this.state.buttons.map(button => {
                    return (
                        <Button
                            key={button.id}
                            src={button.src}
                            value={button.value}
                            componentDidMount={this.generateNumber}
                        />
                    )
                })}
                
            </div>
        )
    }



}


export default Buttons;