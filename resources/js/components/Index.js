import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from "./api/User";

export default class Index extends Component {
    render() {
        return (
            <div className="container">

            </div>
        );
    }
}

if (document.getElementById('users')) {
    ReactDOM.render(<Index />, document.getElementById('users'));
}
