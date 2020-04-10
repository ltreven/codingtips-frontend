import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import JavascriptTips from './JavascriptTips';
import HTMLTips from './HTMLTips';
import CSSTips from './CSSTips';
import BootstrapTips from './BootstrapTips';
import Footer from './Footer';
import Signup from './Signup';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Tip from './Tip';
import Results from './Results';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={() => <Homepage/>} />
                    <Route exact path="/js" component={() => <JavascriptTips/>} />
                    <Route exact path="/html" component={() => <HTMLTips/>} />
                    <Route exact path="/css" component={() => <CSSTips/>} />
                    <Route exact path="/bootstrap" component={() => <BootstrapTips/>} />
                    <Route exact path="/signup" component={() => <Signup/>} />
                    <Route exact path="/create-account" component={() => <CreateAccount/>} />
                    <Route exact path="/login" component={() => <Login/>} />
                    <Route exact path="/tip" component={() => <Tip/>} />
                    <Route path="/results" component={() => <Results/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );  
    }
}

export default Main;
