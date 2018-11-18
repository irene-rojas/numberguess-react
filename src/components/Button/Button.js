import React from "react";
import blue from "./images/blue_btn.png";
import green from "./images/green_btn.png";
// import red from  "../../../public/images/red_btn.png";
// import yellow from "../../../public/images/yellow_btn.png";

const mapNamesToButtons = {
    "blue": blue,
    "green": green
};

// OBJECTS in state that link to image

const Button = (props) => {

    return (
    <div>
        <img 
            src={mapNamesToButtons}
        />
    </div>
    )

}




export default Button;