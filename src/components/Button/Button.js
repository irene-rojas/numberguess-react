import React from "react";
import "./button.css";


const Button = (props) => {

    {/* set onClick to add value */}

    return (

        <a href="#">
            <img 
                src={props.src}
                alt={props.alt}
                value={props.value}
            />
        </a>
        
    )

}


export default Button;