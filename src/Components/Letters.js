import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

  render() {
     let letters=this.props.LetterStatus
     
    return (
        <div>
            <span>Availible letters</span>
        <div> {Object.keys(letters).map(l=><Letter SelectLetter={this.props.SelectLetter} 
        letterSelected={letters[l]} letter={l}/>)}</div>
        </div>
    )
  }
}

export default Letters