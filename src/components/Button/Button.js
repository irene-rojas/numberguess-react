import React from "react";
import "./Button.css";


const Button = (props) => {

  return (

    <div 
        className="zoom"
        onClick={props.onClick}>
            <img
                src={props.src}
                alt={props.alt}
                value={props.value}
            />
    </div>
  )

}

export default Button;