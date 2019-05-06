import React from "react";
import "./index.css";


function Header() {
  return (
    <div>
    <div className="row"></div>
    <div className="jumbotron text-center">
      <h1><b>Click-a-Coffee!</b></h1>
      <hr></hr>
      <h3>Click an image to earn a point. If you click the same image twice, you lose!</h3>
    </div>
    </div>
  );
}

export default Header;