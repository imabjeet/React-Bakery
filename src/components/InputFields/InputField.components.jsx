import React from "react";
import "./InputField.styles.css";

function TextField(props) {
  return (
    <input
      type={props.type}
      required="true"
      title={props.placeholder}
      placeholder={props.placeholder}
    ></input>
  );
}

function TextArea(props) {
  return (
    <textarea
      placeholder={props.placeholder}
      title={props.placeholder}
      rows="5"
    />
  );
}

export { TextField, TextArea };
