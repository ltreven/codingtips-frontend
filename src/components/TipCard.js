import React, { Component } from 'react';
import '../css/style.css';

class TipCard extends Component {
    render () {
        return (
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">{this.props.tip.title}</h4>
                    <p className="card-text">{this.props.tip.summary}</p>
                    <a href="/home" className="btn btn-link">See More</a>
                </div>
            </div>
        );
    }
}

export default TipCard;