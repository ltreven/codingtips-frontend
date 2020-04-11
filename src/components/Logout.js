import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class Logout extends Component {

    render () {
        const cookies = new Cookies();
        cookies.set('codingtips', '', { path: '/' });

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Thanks!</h1>
                        <br/><br/>
                        <p className="lead">
                            User successfully logged out.
                        </p>
                    </div>
                </div>
            </div>
        );    
    }
}

export default Logout;