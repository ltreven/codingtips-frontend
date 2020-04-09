import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

class Header extends Component {

    render () {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">
                    Coding Tips
                </NavLink>
                <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarCollapse" 
                    aria-controls="navbarCollapse" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/js">
                                JS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/html">
                                HTML
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/css">
                                CSS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bootstrap">
                                Bootstrap
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input type="text" className="form-control mr-sm-2" placeholder="(search)" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>    
                </div>
            </nav>
        );    
    }
    
}

export default Header;