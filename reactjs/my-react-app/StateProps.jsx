import React, { Component } from 'react'

export default class StateProps extends Component {
   constructor(props) {
        super(props);
        this.state = {makanans: ['Nasi goreng']};
    } 
    render() {
        return (
            <div>
                <h2> {this.state.makanans}</h2>
                <button onClick={()=> this.setState({makanans: 'Sate'})}>ubah makanan</button>
            </div>
        )
    }
}
