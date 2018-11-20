import React, { Component } from "react";
import Button from "../Button/Button";
// import images from "../Button/images";
import blue from "../Button/images/blue_btn.png";
import green from "../Button/images/green_btn.png";
import red from "../Button/images/red_btn.png";
import yellow from "../Button/images/yellow_btn.png";


class Buttons extends Component {

    state = {
        buttons: [
            {
                id: "blue",
                src: blue,
                alt: "blueBtn",
                value: ""
                // I think Math.random goes here
            },
            {
                id: "green",
                src: green,
                alt: "greenBtn",
                value: ""
            },
            {
                id: "red",
                src: red,
                alt: "redBtn",
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


    // Or does Math.Random go here as componentDidMount?

    render() {
        return (
            <div>

                {this.state.buttons.map(button => {
                    return (
                        <Button
                            key={button.id}
                            src={button.src}
                            value={button.value}
                        />
                    )
                })}
            </div>
        )
    }



}




export default Buttons;