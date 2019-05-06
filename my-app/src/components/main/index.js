import React from "react";
import "./index.css"
// when main loads, return pics array
function Main(props) {
    return <div className="card">
            <img className="card-img border-dark" src={props.image} onClick={() => props.clickedPic(props.id)} alt="coffee" />
            </div>

    
        }
export default Main;

