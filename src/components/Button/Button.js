import React from "react";
import "./Button.css";


const Button = (props) => {


    return (

        <a href="http://localhost:3000/">
            <img 
                src={props.src}
                alt={props.alt}
                value={props.value}
            />
        </a>
        
    )

}


export default Button;