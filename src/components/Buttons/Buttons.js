import React, {Component} from "react";
import Button from "../Button/Button";
// import images from "../Button/images";
import blue from "../Button/images/blue_btn.png";
import green from "../Button/images/green_btn.png";
import red from  "../Button/images/red_btn.png";
import yellow from "../Button/images/yellow_btn.png";


class Buttons extends Component {

    state = {
        buttons: [
            {
                id: "blue", 
                src: {blue},
                alt: "blueBtn", 
                value: ""
            },
            {
                id: "green",
                src: {green},
                alt: "greenBtn",
                value: ""
            },
            {
                id: "red",
                src: {red},
                alt: "redBtn",
                value: ""
            },
            {
                id: "yellow",
                src: {green},
                alt: "yellowBtn",
                value: ""
            }
        ]
    };




    render() {
        return (
            <div>
                <Button src={red}/>

                {/* {this.state.buttons.map((button, index) => {
                    return (
                        <Button
                            key={index}
                        />
                    )
                })} */}
            </div>
        )
    }



}




export default Buttons;