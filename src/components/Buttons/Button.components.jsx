import React from "react";
import "./Button.styles.css";

function Button(props) {
  return (
    <button className={props.style} type={props.type}>
      {props.name}
    </button>
  );
}

export default Button;
