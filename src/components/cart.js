import React from 'react';
import { Button } from 'react-bootstrap';


class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity : 2,
            product : '',
        };
        this.Plusone = this.Plusone.bind(this);
        this.Minusone = this.Minusone.bind(this)

    }

    Plusone() {
        this.setState({quantity : this.state.quantity + 1})
    }

    Minusone() {
        this.setState({quantity : this.state.quantity - 1})
    }

    render() {
        return (
            <div>
                <h1 style={{fontFamily:'monospace', textAlign:'center',  borderRadius:'10px', color:'white'}}> Shopping Cart </h1>
                <hr />
                <div>
                    <h1 style={{fontFamily:'monospace', textAlign:'flex-start',  borderRadius:'10px', color:'white'}}> Product Name : {this.props.product} </h1>    
                </div>
                <div>
                    <h1 style={{fontFamily:'monospace', textAlign:'flex-start',  borderRadius:'10px', color:'white'}}>
                        Price : {this.props.price}
                    </h1>                   
                </div>
                <div>
                    <h1 style={{fontFamily:'monospace', textAlign:'flex-start',  borderRadius:'10px', color:'white'}}>
                        Quantity : {this.state.quantity}
                    </h1>                    
                </div>
                <div>
                    <h1 style={{fontFamily:'monospace', textAlign:'flex-start',  borderRadius:'10px', color:'white'}}>
                        Total : {this.props.price*this.state.quantity}
                    </h1>    
                </div>
                <div>
                    <Button style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}} onClick={this.Plusone}> + </Button>
                    <Button style={{margin:'5px', backgroundColor:'#3f6184', border:'0px', opacity:2, color:'white', fontFamily:'monospace', fontSize: '25px'}} onClick={this.Minusone}> - </Button>

                </div>   
            </div>    
        )
    }
}

export default Cart;
 