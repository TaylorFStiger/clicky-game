import React from 'react';
import './App.css';
import Header from './components/header/'
import NavBar from './components/navBar';
import Main from './components/main/';
import pics from "./pics.json"


// Random shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --------------------------------------//

class App extends React.Component {
  state = {
    pics,
    score: 0,
    topScore: 0,
    message: "Taylor's Click A Coffee Game!",
    clicked: [],
  };

  clickedPic = id => {
    let clickedPics = this.state.clicked;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedPics.indexOf(id) === -1) {
      clickedPics.push(id);
      console.log(clickedPics);
      //shuffle  
      this.handleShuffle();
      // then run the score function
      this.handleIncrement();
    } else if (score === 12) {
      // let them know they won
      this.setState({
        message: "You WIN!",
        score: 0,
        clicked: []
      });
    } else {
      // let them know they lost
      this.setState({
        score: 0,
        clicked: [],
        message: "you lost!"
      });

    }
    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };


  // handle increment incr score by 1
  handleIncrement = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };
  // shuffle pics
  handleShuffle = () => {
    this.setState({
      pics: shuffle(pics),
      message: "You Scored! Pick another coffee!"
    });
  };



  render() {
    return (
      <div className="app">
        <NavBar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <div className="wrapper">
          <div className="card-columns">
            {this.state.pics.map(pic => (

              <Main
                key={pic.id}
                id={pic.id}
                image={pic.image}
                clickedPic={this.clickedPic} />
            ))};
          </div>
        </div>
      </div>

    );
  }
}

// make an array in state that holds all pics, pass down this array down to main comp, in main comp accept array as a prop, map over it while mapping also pass in a onClick for each image, onClick is created in App.js and it will be passed down to main component as a prop. 
export default App;
