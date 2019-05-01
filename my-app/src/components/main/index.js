import React from "react";
import "./index.css"
// when main loads, return pics array
function Main(props) {
    return <div className="container">
                <div className="wrapper">
                    <div className="card-columns">
            {props.pics.map(pic => (
                // return as images, on click run handleClick function on the pic id
               <div className="card">
                <img className="card-img border-dark" src={pic.link} onClick={() => props.handleClick(pic.id)} alt="coffee" key={pic.id} /></div>
            ))}
    </div></div></div>
    }
    
    export default Main;
    
// {this.state.friends.map(friend => (