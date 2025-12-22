


import React, { Component } from 'react'
import { useState } from 'react';


//penggunaan dengan class component
// class Counting extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
        
//     };

//     render() {
//         return (
//           <div>
//             <h1> you clicked {this.state.count} times</h1>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}> click me </button>
//           </div>
//         )
//     }

// }

// export default Counting;


// penggunaan dengan functional component
const Counting = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h1> you clicked {count} times</h1>
        <button onClick={() => setCount (count + 1)}> click me </button>
      </div>
    )
}
export default Counting;



