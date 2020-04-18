import React from "react";
import Image from "../Image";
import "../../styles/Header.css";
import Background from "./images/Rocks.jpg";

var headerStyle = {
  backgroundImage: `url(${Background})`
}

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid pageTitle" style={ headerStyle }>
      <div className="container">
        <h1 className="display-4 header">
          Clean Steep
          <Image></Image>
        </h1>
      </div>
    </div>
  );
}

export default Header;
