import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TipCard extends Component {
    render () {
        let link = "/tip?tip=" + this.props.tip.mdFile;
        return (
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">{this.props.tip.title}</h4>
                    <p className="card-text">{this.props.tip.summary}</p>
                    <NavLink className="btn btn-link" to={link}>
                        See More
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default TipCard;