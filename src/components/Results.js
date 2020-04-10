import React, { Component } from 'react';
import TipList from './TipsList';
import '../css/style.css';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: (new URLSearchParams(window.location.search)).get('search')
            || ''
        };
    }
    
    render () {
        return (
            <div className="container-fluid mt-5 mb-5">
                <TipList search={this.state.search}/>
            </div>
        );    
    }
}

export default Results;