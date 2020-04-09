import React, { Component } from 'react';
import TipList from './TipsList';
import '../css/style.css';

class HTMLTips extends Component {

    render () {
        return (
            <div className="container-fluid mt-5 mb-5">
                <TipList tech="html"/>
            </div>
        );    
    }
}

export default HTMLTips;