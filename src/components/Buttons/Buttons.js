import React, {Component} from "react";
import Button from "../Button/Button";


class Buttons extends Component {

    // state = {
    //     buttons
    // };




    render() {
        return (
            <div>
                <Button />

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