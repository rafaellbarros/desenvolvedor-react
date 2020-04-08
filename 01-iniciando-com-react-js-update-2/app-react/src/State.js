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

    componentDidMount() {
        // 'após a sua montagem';
    }

    componentDidUpdate() {
        // 'após qualquer update qualquer alteração no componente';
    }

    componentWillMount() {
        // 'a partir do momento que ele está sendo montando'
    }

    componentWillUnmount() {
        // 'a partir do momento que ele está sendo desmontando'
    }

    componentWillReceiveProps() {
        // 'a partir do momento que ele recebe uma props, alteração ou uma nova'
    }

    componentDidCatch() {
        // 'a partir do momento que ele captura uma exceção'
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
