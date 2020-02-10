import React from "react";
import "./Button.css";

function Button(props) {
    return (
        <button
            className="medium ui button"
            onClick={props.active ? props.onButtonClick : null}
            style={props.active ? { background: props.color || "#EB7D18", cursor: "pointer" } 
                : { background: "#999", cursor: "default"}
            }
        >
            {props.text}
        </button>
    );
}

export default Button;