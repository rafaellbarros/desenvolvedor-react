import React, { Component } from 'react';
import InitForm from '../components/initForm';

// Container
class App extends Component {

  onClick = (e) => {
    e.preventDefault();
    console.log('Clicked in Redux Form');
  }

  onChangeName = ({target}) => {
    const { name, value } = target;
    console.log('Target Input', name, value);
  }

  render() {
    return (
      <div className="col">
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">My First Redux Form</div>
              <InitForm onClick={this.onClick} onChangeName={this.onChangeName} />
            </div>
            <div className="card-footer">
              <p>Card Footer</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;