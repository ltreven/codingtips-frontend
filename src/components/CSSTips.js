import React, { Component } from 'react';
import TipList from './TipsList';
import '../css/style.css';

class CSSTips extends Component {

    render () {
        return (
            <div className="container-fluid mt-5 mb-5">
                <TipList tech="css"/>
            </div>
        );    
    }
}

export default CSSTips;