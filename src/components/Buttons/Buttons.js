import React, { Component } from "react";
import Button from "../Button/Button";
import black from "../Button/images/black_cat.png";
import brown from "../Button/images/brown_cat.png";
import gray from "../Button/images/gray_cat.png";
import yellow from "../Button/images/yellow_cat.png";


class Buttons extends Component {

    generateNumber = (min, max) => {
        const rndNumBtn = Math.floor(Math.random()*(max-min+1)+min);
        // console.log(rndNumBtn);
        return rndNumBtn
      };

    state = {
        buttons: [
            {
                id: "black",
                src: black,
                alt: "blackBtn",
                value: this.generateNumber(1, 12)
            },
            {
                id: "brown",
                src: brown,
                alt: "brownBtn",
                value: this.generateNumber(1, 12)
            },
            {
                id: "gray",
                src: gray,
                alt: "grayBtn",
                value: this.generateNumber(1, 12)
            },
            {
                id: "yellow",
                src: yellow,
                alt: "yellowBtn",
                value: this.generateNumber(1, 12)
            }
        ]
    };

    render() {
        return (
            <div>

                {this.state.buttons.map(button => {
                    return (
                        <Button
                          className={button.id}
                          key={button.id}
                          src={button.src}
                          alt={button.alt}
                          value={button.value}
                          onClick={this.props.onClick}
                        />
                    )
                })}

            </div>
        )
    }
}

export default Buttons;