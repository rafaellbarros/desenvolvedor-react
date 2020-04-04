import React, { Component } from 'react';

export default class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rafael Barros',
            age: 31
        }
        console.log(this.state);
    }

    render() { 
        const { name, age } = this.state;
        return (
            <div className="container">
                <p>State</p>
                <p><strong>Name:</strong> { name }</p>
                <p><strong>Age:</strong> { age }</p>
            </div>

        );
    }
}
