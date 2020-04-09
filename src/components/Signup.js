import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

class Signup extends Component {

    render () {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Collaborate</h1>
                        <p className="lead">
                            Sending one tip per day, makes us happy everyday.
                            <br/><br/>
                            Click sigup to create your account and start sending some tips.
                        </p>
                        <hr className="my-2"/>
                        <br />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2 pb-4">
                                    <NavLink className="btn btn-primary btn-lg" to="/create-account">
                                        Signup
                                    </NavLink>
                                </div>
                                <div className="col-sm-10">
                                    <NavLink className="btn btn-link btn-lg" to="/login">
                                        Login
                                    </NavLink>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}

export default Signup;