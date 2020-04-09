import React, { Component } from 'react';
import TipList from './TipsList';
import Jumbotron from './Jumbotron';
import '../css/style.css';

class Homepage extends Component {

    render () {
        return (
            <div>
                <Jumbotron />
                <div className="container-fluid mt-5 mb-5">
                    <TipList tech="js"/>
                </div>
            </div>
        );    
    }
}

export default Homepage;