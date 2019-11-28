import React from 'react';
import './App.css';
// import Button from './components/button';
// import Add from './components/Adder';
import TarzanCalculator from './components/tarzancalc';
import Cart from './components/cart';
import SimpleCalculator from './components/simplecalc';
import Sudoko from './components/sudoko';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {
    return(
      <div>
        <h1 style={{display:'flex', justifyContent:'center'}}>Sudoko Game </h1>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Sudoko />

        </div>
        
      </div>

    )
  }
};

export default App;
