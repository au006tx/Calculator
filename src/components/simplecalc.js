import React from 'react';
import { Button } from 'react-bootstrap';


class SimpleCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : this.props.inputValue
        }
        this.onchange = this.onchange.bind(this);
    }

    onchange(event) {
        this.setState({
            inputValue : event.target.value
        })
    }

    numpad(value) {
        this.setState({
            inputValue : this.state.inputValue + value
        })
    }


render(){
    return(
        <div>
            <div style={{paddingBottom:'20px'}}>
                <input type='text' value={this.state.inputValue} onChange={this.onchange} />
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button onClick={() => this.numpad('7')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 7 </Button>
                <Button onClick={() => this.numpad('8')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 8 </Button>
                <Button onClick={() => this.numpad('9')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 9 </Button>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button onClick={() => this.numpad('4')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 4 </Button>
                <Button onClick={() => this.numpad('5')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 5</Button>
                <Button onClick={() => this.numpad('6')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 6 </Button>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button onClick={() => this.numpad('3')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 3 </Button>
                <Button onClick={() => this.numpad('2')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 2 </Button>
                <Button onClick={() => this.numpad('1')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 1 </Button>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button onClick={() => this.numpad('0')} style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}}> 0 </Button>
            </div>
        </div>

    )
}

}

export default SimpleCalculator;