import  React, { Component } from "react";

export default class Events2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            data: []
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    insertToData = () => {
        const arr = this.state.data;
        arr.push({name: this.state.name, age: this.state.age});
        this.setState({
            name: '',
            age: '',
            data: arr
        })
        console.log(this.state);
    }

    render() {
        const { data } = this.state;
        return (
        
            <div> 
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Enter your name" /><br />
                <input type="text" onChange={this.handleChange} name="age" id="age" placeholder="Enter your age" /><br />
                <button type="button" onClick={this.insertToData}>Ok!</button>
                <ul>
                    { 
                        data.map(item => (
                            <li key={item.name}>{item.name} - {item.age}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}