import logo from './logo.svg';
import './App.css';
import Solution from './Components/Solution';
import Score from './Components/Score';
import Letter from './Components/Letter';
import Letters from './Components/Letters';
import EndGame from './Components/EndGame';
import { Component } from 'react/cjs/react.production.min';


class App extends Component{
  constructor() {
    super()
    this.state = {
      letterStatus : this.generateLetterStatuses(),
      solution:{word:"AMEER",hint:"what is your name"},
      score:100,
      play:"playing"
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  SelectLetter=(selectLetter)=>{
    let playTmp=this.state.play;
    //change status to true
    let letterStatusTemp=Object.assign({},this.state.letterStatus)
    letterStatusTemp[selectLetter]=true
    //if the user guess the letter well plus 5 
    let ArrayWord=this.state.solution.word.split("")
    let scoreTmp=this.state.score
    //score plus 5
    if(ArrayWord.find(w=>w===selectLetter))
      scoreTmp+=5
        //score 20
    else
      scoreTmp-=20
    if(scoreTmp<=0)
    playTmp="lose"

    playTmp=this.CheckLetter();
    
    this.setState({
      play:playTmp,
      letterStatus:letterStatusTemp,
      score:scoreTmp
    }
    )
    
    
  }
  CheckLetter=()=>{
    let ArrayLetter=this.state.solution.word.split("")
    for(let char of ArrayLetter)
    {
      if(!this.state.letterStatus[char.toUpperCase()])
      {
        return "playing"
      }
    }
    return "win"
  }
  render() {
    return (
      <div><Score score={this.state.score}/>
      <Solution solution={this.state.solution} LetterStatus={this.state.letterStatus}/>
      <Letters LetterStatus={this.state.letterStatus} SelectLetter={this.SelectLetter}/>
      <EndGame play={this.state.play}/>
      </div>
    )
  }  
}

export default App;
