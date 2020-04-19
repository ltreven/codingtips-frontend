import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import JavascriptTips from './JavascriptTips';
import HTMLTips from './HTMLTips';
import CSSTips from './CSSTips';
import BootstrapTips from './BootstrapTips';
import Footer from './Footer';
import Collaborate from './Collaborate';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Logout from './Logout';
import Tip from './Tip';
import Results from './Results';
import EditTip from './EditTip';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Homepage} />
                    <Route exact path="/js" component={JavascriptTips} />
                    <Route exact path="/html" component={HTMLTips} />
                    <Route exact path="/css" component={CSSTips} />
                    <Route exact path="/bootstrap" component={BootstrapTips} />
                    <Route exact path="/collaborate" component={Collaborate} />
                    <Route exact path="/create-account" component={CreateAccount} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/tip" component={Tip} />
                    <Route exact path="/results" component={Results} />
                    <Route exact path="/logout" component={Logout} />
                    <Route path="/edit/:id" component={(props) => <EditTip tipId={props.match.params.id}/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );  
    }
}

export default Main;
