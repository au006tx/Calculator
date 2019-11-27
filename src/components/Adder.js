import React from 'react';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''

        };
    };

    render(){
        return(
            <div style={{backgroundColor:'red', textAlign:'center', float:'left', padding:'10px' ,margin:'20px'}}>
            {this.props.A+this.props.B}
            </div>               
        )
    }
};

export default Add;