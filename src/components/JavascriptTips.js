import React, { Component } from 'react';
import TipList from './TipsList';

class JavascriptTips extends Component {

    render () {
        return (
            <div className="container-fluid mt-5 mb-5">
                <TipList tech="js"/>
            </div>
        );    
    }
}

export default JavascriptTips;