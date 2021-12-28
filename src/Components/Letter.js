import React, { Component } from 'react';

class Letter extends Component {
    SelectLetter=()=>{
        this.props.SelectLetter(this.props.letter)
    }
  render() {
    let letter=this.props.letter
    let letterSelected=this.props.letterSelected
    return (
        letterSelected===true?
          <span className='selected'>{letter}</span>:<span onClick={this.SelectLetter}>{letter}</span>
    )
  }
}

export default Letter