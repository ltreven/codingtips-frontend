import React, { Component } from 'react';
import TipList from './TipsList';

class BootstrapTips extends Component {

    render () {
        return (
            <div className="container-fluid mt-5 mb-5">
                <TipList tech="bootstrap"/>
            </div>
        );    
    }
}

export default BootstrapTips;