import React, { Component } from 'react';
import Panel from './Panel';

export default class Props extends Component {

    constructor(props) {
        super(props);
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);
    }

    render() { 
        const { attr, attr2, attr3 } = this.props;
        return (
            <div>
                { attr === 'p' ? <p>PROPS</p> : <h1>PROPS</h1>}
                <Panel headercolor="red" bordercolor="blue" headertext="This is a hreader" data="School of Net" />
                <Panel headercolor="gray" bordercolor="purple" headertext="This is a hreader" data="School of Net" />
            </div>
        );
    }
}
