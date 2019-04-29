import React from 'react';

import './App.css';
import NavBar from './components/navBar/';
import Main from './components/main/';

class App extends React.Component{
  state={
  score:0,
  topScore:0
  }
  
  render(){  
  return (
    <div className="App">
    <NavBar score={this.state.score} topScore={this.state.topScore} />
     <Main />
    </div>
  )}
}
// make an array in state that holds all pics, pass down this array down to main comp, in main comp accept array as a prop, map over it while mapping also pass in a onClick for each image, onClick is created in App.js and it will be passed down to main component as a prop. 
export default App;
