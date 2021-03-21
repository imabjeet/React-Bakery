import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./HomePageItem.styles.css";

function clickHandler(event, history) {
  history.push("/" + event.target.id.replace(" ", ""), { from: "HomePage" });
}

function HomePageItem(props) {
  let url = props.content.url;
  let img = {
    backgroundImage: "url(" + url + ")"
  };
  const history = useHistory();

  return (
    <div
      className="menu-image"
      onClick={(event) => {
        clickHandler(event, history);
      }}
    >
      <div
        className="menu-background"
        id={props.content.title.toLowerCase()}
        style={img}
      ></div>
      <div className="content">
        <h2>{props.content.title}</h2>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
}

export default HomePageItem;
