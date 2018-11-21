import React from "react";
import "./Button.css";


const Button = (props) => {


  return (

    <button>
      <img
        className="zoom"
        src={props.src}
        alt={props.alt}
        value={props.value}
      />
    </button>
  )

}


export default Button;