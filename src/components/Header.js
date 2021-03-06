import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.search = this.search.bind(this);
    }

    search(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
        }
    }

    handleSearchChange(e) {
        this.setState({search: e.target.value});
    }
    
    render () {
        const link = "/results?search=" + this.state.search;
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
                        <input type="text" name="search" id="search" 
                            className="form-control mr-sm-2" 
                            onChange={this.handleSearchChange}
                            onKeyDown={this.search}
                            placeholder="(search)" />
                            <NavLink className="btn btn-outline-success my-2 my-sm-0" to={link}>
                                Search
                            </NavLink>                            
                    </form>    
                </div>
            </nav>
        );    
    }
    
}

export default Header;