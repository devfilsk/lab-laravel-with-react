import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";

export default class IndexRouter extends Component {
    render() {
        return (
            <div className="container">
                <Header/>

                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('router-home')) {
    ReactDOM.render(<IndexRouter />, document.getElementById('router-home'));
}
