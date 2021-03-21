import React from "react";
import "./ImageList.styles.css";

function ImageList({ items }) {
  return items.map((item) => {
    return <img src={item} alt="BakedImage" />;
  });
}

export default ImageList;
