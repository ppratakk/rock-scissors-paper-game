import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor() {
    super()
    this.state = {
      result: '',
      userScore: 0,
      aiScore: 0
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    
    var userChoice = e.currentTarget.id
    this.matchStart(userChoice)
  };
  
  matchStart = (userChoice) => {
    var aiChoice = this.getAiChoice();
    
    if(userChoice === aiChoice){
      this.matchDraw(userChoice, aiChoice);
    }else{
      var score = userChoice.charAt(0)+aiChoice.charAt(0)

      switch (score) {
        case "rs":
        case "pr":
        case "sp":
                  this.userWin(userChoice, aiChoice);
                  break;
        case "sr":
        case "rp":
        case "ps":
                  this.aiWin(userChoice, aiChoice);
                  break;
        default:
          break;
      }
    }
  }
  
  getAiChoice = () => {
    
    const choice = ["paper", "rock", "scissor"]

    return choice[Math.floor(Math.random()*choice.length)]
  }

  matchDraw(userChoice, aiChoice){
    console.log("Draw")
    this.setState({
      result: "You chose " + userChoice  + " and AI chose " + aiChoice + " : Match Draw!!!"
    });
  }
  userWin(userChoice, aiChoice){
    console.log("You win")
    this.setState({
      result: "You chose " + userChoice  + " and AI chose " + aiChoice + " : You Win !!!",
      userScore: this.state.userScore +1
    });
  }
  aiWin(userChoice, aiChoice){
    console.log("You lose")
    this.setState({
      result: "You chose " + userChoice  + " and AI chose " + aiChoice + " : You Lose !!!",
      aiScore: this.state.aiScore + 1
    });
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <p>
            Rock Scissors Paper Game
          </p>
          <div className="scores">
            <div id="user-label" className="badge">User </div>
            <div id="comp-label" className="badge">A.I </div>
            <span id="user-score">{this.state.userScore}</span>:<span id="computer-score">{this.state.aiScore}</span>
          </div>
          <div className="result">
            <p>{this.state.result}</p>
          </div>
          <div className="choices">  
            <div className="choice" id="paper" onClick={(e) => this.handleClick(e)}>
              <img src={require('./assets/img/paper.png')} alt="paper"/>
            </div>
    
            <div className="choice" id="scissor" onClick={(e) => this.handleClick(e)}>
              <img src={require('./assets/img/scissor.png')} alt="scissor"/>
            </div>
    
            <div className="choice" id="rock" onClick={(e) => this.handleClick(e)}>
              <img src={require('./assets/img/rock.png')} alt="rock"/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
