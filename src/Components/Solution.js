import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

  render() {
    let word=this.props.solution.word
    let hint=this.props.solution.hint
    let LetterStatus=this.props.LetterStatus
    const myArrayWord = word.split("");
    return (
      <div>
          {myArrayWord.map(s=>LetterStatus[s]===true?<Letter letter={s}/>:<Letter letter="_ "/>)}
          <div>{hint}</div>
      </div>
    )
  }
}

export default Solution