import React, { Component } from 'react';
import TipCard from './TipCard';
import { baseUrl } from '../BaseUrl.js';


class TipsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tips: [],
            error: null
        };

        this.loadTips();
    }

    loadTips = () => {
        const url = baseUrl + 'tips/';
        fetch(url)
        .then(res => res.json())
        .then(tips => this.setState({
            tips: tips,
            error: null
            }))
        .catch((err) => {
            const msg = "Could not load data from " + url;
            console.log(msg, err);
            this.setState({
                error: msg
            })
        });
    }

    render () {
        const tips = this.state.tips.map((tip) => {
            return (
                <div className="col-md-6 pb-4">
                    <TipCard tip={tip} />
                </div>
            );
        });
        const errorMsg = () => {
            return (
                <div className="error">
                    ERROR Loading tips: {this.state.error}
                </div>
            );
        }

        const empty = () => {
            return (
                <div className="empty">
                    No tips here yet :(
                </div>
            );
        }

        let show  = tips;
        
        if (this.state.error !== null) {
            // show error message
            show = errorMsg();
        } else if (!tips || tips.length === 0) {
            // show empty
            show = empty();
        }

        return (
            // create container for Cards
            <div className="container">
                <div className="row">
                    {show}
                </div>
            </div>
        );
    }
}

export default TipsList;