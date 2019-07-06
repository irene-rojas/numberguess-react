import React from "react";
import "./button.css";


const Button = (props) => {

  return (
        
    <img
        src={props.src}
        alt={props.alt}
        value={props.value}
        className="zoom"
        onClick={props.onClick}
    />
    
  )

}

export default Button;