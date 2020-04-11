import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <footer className="container">
                <hr className="featurette-divider" />
                <p className="float-right">
                    <NavLink className="nav-link" to="/collaborate">
                        Collaborate
                    </NavLink>
                </p>
                <p>
                    © 2020 Codingtips.
                </p>
      </footer>
        );
    }
}

export default Footer;