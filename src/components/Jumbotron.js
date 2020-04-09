import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

class Jumbotron extends Component {
    render () {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Coding Tips</h1>
                    <p class="lead">
                        One tip per day takes the unproductivity away.
                        <br/>
                        Try the codingtips Google Assistant app and listen to one tip per day.
                    </p>
                    <hr class="my-2"/>
                    <br />
                    <p class="lead">
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