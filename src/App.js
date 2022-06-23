// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" ,
  stepCount: 0};

  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  sendInput = ()=>{
    const { inputValue } = this.state;
    this.setState({ step: this.state.step += inputValue });
    
  }
  render() {
    const { step, inputValue } = this.state;

    return (

      <div>
        <p>Step: {step}</p>
        <Counter />
        <input
        type={Number}
          name="inputValue"
          value={inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.sendInput}>Send</button>
      </div>
    );
  }
}

export default App;