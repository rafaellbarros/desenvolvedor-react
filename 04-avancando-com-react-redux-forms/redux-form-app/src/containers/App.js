import React, { Component } from 'react';
import InitForm from '../components/initForm';

// Container
class App extends Component {
  render() {
    return (
      <div>
        <p> To get started, edit <code>src/App.js</code> and save to reload.</p>
        <p>
          <InitForm />
        </p>
      </div>
    );
  }
}

export default App;