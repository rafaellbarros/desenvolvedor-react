import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { name: '', desc: '', age: ''}
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const { target } = event;
    const { name } = target;
    const value  = target.type === 'checkbox' ? target.checked : target.value;

    return this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <div>
            Name: <input type="text" name="name" onChange={this.handleInput}/> <br />
            Desc: <input type="text" name="desc" onChange={this.handleInput}/> <br />
            Age: <input type="number" name="age" onChange={this.handleInput}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
