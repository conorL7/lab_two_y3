import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>The time is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Content;