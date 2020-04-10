import React, { Component } from 'react';
import TipCard from './TipCard';
import { baseUrl } from '../BaseUrl.js';


class TipsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tips: [],
            search: this.props.search || '',
            tech: this.props.tech || '',
            limit: 20,
            offset: 0,
            nomore: false,
            error: null
        };

        this.loadTips(this.props.search, this.props.tech);
    }

    componentDidUpdate(prevProps) {
        if (this.state.search !== this.props.search) {
            this.loadTips(this.props.search, this.props.tech);
        }
    }

    loadTips(search, tech) {
        //const nexttips = this.state.tips;
        let filter = 'limit=' + this.state.limit +
                    '&offset=' + this.state.offset;

        if (search) {
            filter += '&search=' + search;
        }
        if (tech) {
            filter += '&technology=' + tech;
        }
            
        fetch(baseUrl + 'tips/?' + filter)
        .then(res => res.json())
        .then(tips => this.setState({
            tips: tips,
            search: search,
            tech: tech,
            nomore: tips.length === 0,
            error: null
            }))
        .catch((err) => {
            const msg = "Could not load data.";
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