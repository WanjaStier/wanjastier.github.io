import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        var value = this.state.value;
        return <input type="text" value={value} onChange={this.handleChange} />;
    }
}
