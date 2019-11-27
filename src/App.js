import React from 'react';
import './App.css';
// import Button from './components/button';
// import Add from './components/Adder';
import TarzanCalculator from './components/tarzancalc';
import Cart from './components/cart';
import SimpleCalculator from './components/simplecalc';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {
    return(
      <div style={{display:'block', float:'left', marginTop:'50px', padding:'20px', borderRadius:'15px', backgroundColor:'#9994d6', marginLeft:'100px'}}>
        {/* <Cart product='Iphone' quantity={1} price={50000} /> */}
        {/* <TarzanCalculator /> */}
        <SimpleCalculator inputValue={0}/>
      </div>

    )
  }
};

export default App;
