import React, { Component } from 'react';
//import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "../api/User";

export default class Header extends Component{
    render(){
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Laravel and React</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/about'}>Aboute</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to={'/users'}>Users</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    <Route exact={true} path='/' component={Home}/>
                    <Route exact={true} path='/about' component={About}/>
                    <Route exact={true} path='/users' component={User}/>
                </div>
            </Router>
        );
    }
}