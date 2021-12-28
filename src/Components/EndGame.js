import React, { Component } from 'react';

class EndGame extends Component {
  
  render() {
    console.log(this.props.play)
    return (
        
        this.props.play==="win"?<div>Congratulations</div>:this.props.play==="lose"?<div>lose</div>:<div>playing</div>
    )
  }
}

export default EndGame