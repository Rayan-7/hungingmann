import React, { Component } from 'react';

class Score extends Component {
  render() {
    let score=this.props.score;
    
    return score>=80?<div className='high-score'>{score}</div>:score>=50?
    <div className='medium-score'>{score}</div>:<div className='low-score'>{score}</div>
  }
}

export default Score