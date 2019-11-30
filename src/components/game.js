import React from 'react';
import Grid from './grid';

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0
      };
      this.takeNumber = this.takeNumber.bind(this);
    }
    takeNumber(value) {
      this.setState({
        number: value
      });
    }
    render() {
      return (
        <div className="App">
          <div>
            <div style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>
              <Grid number={3} />
              <Grid answer={1} />
              <Grid answer={2}  />
              <Grid number={4} />
            </div>
            <div style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>            
              <Grid answer={1} />
              <Grid number={3} />
              <Grid number={4} />            
              <Grid answer={2} />
            </div>
          </div>
          <div>
            <div style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>
              <Grid answer={4} />
              <Grid number={2} />
              <Grid number={1} />
              <Grid answer={3} />
            </div>
            <div style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>
              <Grid number={2} />            
              <Grid answer={4} />
              <Grid answer={3} />
              <Grid number={1} />
            </div>
          </div>
        </div>
      )
    }
  }
  export default Game;