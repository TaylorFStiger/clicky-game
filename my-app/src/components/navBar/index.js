import React from "react";
import "./index.css"

function NavBar (props) {
    return <div className="row"><nav className= "navbar navbar-expand-lg navbar-light bg-dark text-center">
        <p className="title display-2 text-center text-uppercase text-light">{props.message}</p><hr></hr>
    <p className="scores"><b>Score: {props.score}  || Top Score: {props.topScore}</b></p>
    </nav>
    </div>
}

export default NavBar;