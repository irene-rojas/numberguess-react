import React from "react";
import "./Button.css";


const Button = (props) => {

  return (

    <button className="zoom">
      <img
        src={props.src}
        alt={props.alt}
        value={props.value}
      />
    </button>
  )

}

export default Button;