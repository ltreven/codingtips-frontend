import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Jumbotron extends Component {
    render () {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Coding Tips</h1>
                    <p className="lead">
                        One tip per day takes the unproductivity away.
                        <br/>
                        Try the codingtips Google Assistant app and listen to one tip per day.
                    </p>
                    <hr className="my-2"/>
                    <br />
                    <p className="lead">
                        <NavLink className="btn btn-primary btn-lg" to="/html">
                            Start with HTML
                        </NavLink>
                    </p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;