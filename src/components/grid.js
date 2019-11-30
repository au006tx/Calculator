import React from 'react';


class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: null,
      tries: 0
    };
    this.setAnswer = this.setAnswer.bind(this);
    this.colorMap = {
      '1': 'green',
      '2': 'orange',
      '3': 'red',
    }
  }
  setAnswer(event) {
    this.setState({      
      guess: event.target.value,
      tries: event.target.value ? (this.state.tries + 1) : this.state.tries
    });
  }
  render () {
    return (
      <div style={{display:'flex', flexDirection:'row', width:'50px', 'height':'50px', textAlign:'center', alignItems:'center'}}>
        {this.props.number ? (
          this.props.number
        ) : (
          this.props.answer === parseInt(this.state.guess) ? (
            this.props.answer
          ) : (
            <input disabled={this.state.tries > 3 ? 'disabled' : null} style={{backgroundColor: this.colorMap[this.state.tries.toString()], width:'50px', 'height':'50px', textAlign:'center'}} onChange={this.setAnswer} type="text" value={this.state.guess} />
          )          
        )}
      </div>
    )
  }
}

export default Grid;