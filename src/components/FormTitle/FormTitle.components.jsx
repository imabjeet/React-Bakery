import React from "react";
import "./FormTitle.styles.css";
function FormTitle(props) {
  return (
    <div>
      <h1 className={props.styles}>{props.title}</h1>
      <h3>{props.disc}</h3>
    </div>
  );
}

export default FormTitle;
