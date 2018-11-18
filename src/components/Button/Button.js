import React from "react";
// import blue from "./images/blue_btn.png";
// import green from "./images/green_btn.png";
// import red from  "./images/red_btn.png";
// import yellow from "./images/yellow_btn.png";

// const mapNamesToButtons = {
//     "blue": blue,
//     "green": green
// };

// const images = require("./images");

// OBJECTS in state that link to image

const Button = (props) => {

    return (
    <div id="individualButton">
        {/* set onClick to add value */}
            <img 
                src={props.src}
                alt={props.alt}
                value={props.value}
            />
    </div>
    )

}




export default Button;