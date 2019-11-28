import React from 'react';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
        }
    }

    render(){
        return(
            <div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', border:'solid black 1px',width :'50px', height:'50px'}}>
                <h1 style={{backgroundColor:'green', width:'50px', height:'50px',color:'white', border:'solid black 1px', textAlign:'center'}}>
                    {this.props.number}
                </h1>              
            </div>
        );
    }
}

export default Box;