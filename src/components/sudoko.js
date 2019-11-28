import React from 'react';
import Box from './box';

class Sudoko extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            r12 : '',
            r13 : '',
            r21 : '',
            r24 : '',
            r31 : '',
            r34 : '',
            r42 : '',
            r43 : '',
        }
        this.onInserta = this.onInserta.bind(this);
        this.onInsertb = this.onInsertb.bind(this);
        this.onInsertc = this.onInsertc.bind(this);
        this.onInsertd = this.onInsertd.bind(this);
        this.onInserte = this.onInserte.bind(this);
        this.onInsertf = this.onInsertf.bind(this);
        this.onInsertg = this.onInsertg.bind(this);
        this.onInserth = this.onInserth.bind(this);
    }

    onInserta(event) {
        this.setState({
            r12 : event.target.value
        })
    }

    onInsertb(event) {
        this.setState({
            r13 : event.target.value

        })
    }

    onInsertc(event) {
        this.setState({
            r21 : event.target.value
        })
    }

    onInsertd(event) {
        this.setState({
            r24 : event.target.value
        })
    }

    onInserte(event) {
        this.setState({
            r31 : event.target.value
        })
    }

    onInsertf(event) {
        this.setState({
            r34 : event.target.value
        })
    }

    onInsertg(event) {
        this.setState({
            r42 : event.target.value
        })
    }

    onInserth(event) {
        this.setState({
            r43 : event.target.value
        })
    }

    render(){
        return(
            <div style={{margin:'100px'}}>
                <div style={{ flexDirection:'row', display:'flex'}}>
                    <Box number={3} />
                    {this.state.r12 == '1' ? (
                        <Box number={this.state.r12} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r12} onChange={this.onInserta} />
                    )}
                    {this.state.r13 == '4' ? (
                        <Box number={this.state.r13} />        
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r13} onChange={this.onInsertb} />     
                    )}
                    <Box number={2} />
                </div>
                <div style={{ flexDirection:'row', display:'flex'}}>
                    {this.state.r21 == '2'  ? (
                        <Box number={this.state.r21} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r21} onChange={this.onInsertc} />
                    )}
                    <Box number={4} />
                    <Box number={1} />
                    {this.state.r24 == '3'  ? (
                        <Box number={this.state.r24} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r24} onChange={this.onInsertd} />
                    )}
                </div>
                <div style={{ flexDirection:'row', display:'flex', textAlign:'center'}}>
                    {this.state.r31 == '1' ? (
                        <Box number={this.state.r31} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r31} onChange={this.onInserte} />
                    )}
                    <Box number={3} />
                    <Box number={2} />
                    {this.state.r34 == '4'  ? (
                        <Box number={this.state.r34} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r34} onChange={this.onInsertf} />
                    )}  
                </div>
                <div style={{ flexDirection:'row', display:'flex'}}  >
                    <Box number={4} />
                    {this.state.r42 == '2'  ? (
                        <Box number={this.state.r42} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r42} onChange={this.onInsertg} />
                    )} 
                    {this.state.r43 == '3'  ? (
                        <Box number={this.state.r43} />       
                    ):(
                    <input style={{width:'50px', height:'50px', textAlign:'center'}} value={this.state.r43} onChange={this.onInserth} />
                    )} 
                    <Box number={1} /> 
                </div>
            </div>   
        )
    }
}

export default Sudoko;

