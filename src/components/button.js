import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        } 
    };

    render(){
        return(
            <div style={{backgroundColor:'red', textAlign:'center', float:'left', padding:'10px' ,margin:'20px'}}>

            {this.props.name}                  
            </div>
        )
    }
};

export default Button;