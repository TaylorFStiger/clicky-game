import React from 'react';

import './App.css';
import Header from './components/header/'
import NavBar from './components/navBar';
import Main from './components/main/';

class App extends React.Component{
  state={
  message:"click an image to start the game!",
  score:0,
  topScore:0,
  pics:[{id:1, link:"https://picsum.photos/id/237/200/300"}, {id:2, link:"https://picsum.photos/id/239/200/300"}, {id:3, link:"https://picsum.photos/id/238/200/300"}, {id:4, link:"https://picsum.photos/id/240/200/300"},{id:5, link:"https://picsum.photos/id/241/200/300"},{id:6, link:"https://picsum.photos/id/242/200/300"},{id:7, link:"https://picsum.photos/id/243/200/300"},{id:8, link:"https://picsum.photos/id/244/200/300"},{id:9, link:"https://picsum.photos/id/222/200/300"},{id:10, link:"https://picsum.photos/id/223/200/300"},{id:11, link:"https://picsum.photos/id/225/200/300"},{id:12, link:"https://picsum.photos/id/220/200/300"}]
  }
  
  handleClick = id => {
    console.log("i'm clicked");
    console.log(id);
    // grab the id and do logic
    
  }

  render(){  
  return (
    <div className="App">
    <NavBar message= {this.state.message} score={this.state.score} topScore={this.state.topScore} />
    <Header />    
    <Main pics={this.state.pics} handleClick={this.handleClick} />
    </div>
  )}
}
// make an array in state that holds all pics, pass down this array down to main comp, in main comp accept array as a prop, map over it while mapping also pass in a onClick for each image, onClick is created in App.js and it will be passed down to main component as a prop. 
export default App;
