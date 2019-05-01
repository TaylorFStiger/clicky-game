import React from "react";
import "./index.css"

function NavBar (props) {
    return <div><nav className= "navbar navbar-expand-lg navbar-light bg-dark text-center">
        <p className="display-3 text-center text-uppercase text-light">{props.message}</p><hr></hr>
    <p>score:{props.score} Top Score:{props.topScore}</p>
    </nav>
    </div>
}

export default NavBar;