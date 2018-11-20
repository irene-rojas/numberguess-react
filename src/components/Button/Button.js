import React from "react";

const Button = (props) => {

    return (
    <div id="individualButton">
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