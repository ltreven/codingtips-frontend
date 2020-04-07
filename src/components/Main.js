import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={() => <Homepage/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );  
    }
}

export default Main;
