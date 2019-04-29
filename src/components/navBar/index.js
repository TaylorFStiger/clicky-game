import React from "react";
import "./index.css"

function NavBar (props) {
    return <div>score:{props.score}<br />Top Score:{props.topScore}</div>
}

export default NavBar;