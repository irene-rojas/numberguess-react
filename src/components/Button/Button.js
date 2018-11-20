import React from "react";
import "./button.css";


const Button = (props) => {

    return (
    <div className="individualButton">
        {/* set onClick to add value */}
        <a href="#">
            <img 
                src={props.src}
                alt={props.alt}
                value={props.value}
            />
        </a>
    </div>
    )

}


export default Button;