import React, { Component } from 'react';
import '../css/style.css';

class TipCard extends Component {
    render () {
        let link = "/tip?tip=" + this.props.tip.mdFile;
        return (
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">{this.props.tip.title}</h4>
                    <p className="card-text">{this.props.tip.summary}</p>
                    <a href={link} className="btn btn-link">See More</a>
                </div>
            </div>
        );
    }
}

export default TipCard;