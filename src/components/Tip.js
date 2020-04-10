import React, { Component } from 'react';
import { baseFilesUrl } from '../BaseFilesUrl.js';
const ReactMarkdown = require('react-markdown');

class Tip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mdFileName: (new URLSearchParams(window.location.search)).get('tip')
                || '',
            mdFile: '',
            error: null
        };

        this.loadTip();
    }

    loadTip() {    
        fetch(baseFilesUrl + 'md/' + this.state.mdFileName)
        .then(res => {
            if (res.status !== 200) {
                throw new Error("Not 200 response")
            }
            return res.text();
        })
        .then(mdFile => this.setState({mdFile: mdFile}))
        .catch((err) => {
            const msg = "Could not load MD file.";
            console.log(msg, err);
            this.setState({
                error: msg
            })
        });
  
    }

    render () {
        if (this.state.error) {
            return (
                <div className="container">
                    <br/>
                    <h1>Sorry, this tip was not found...</h1>
                </div>
            )
        }
        return (
            <div className="container">
                <ReactMarkdown source={this.state.mdFile} />
            </div>
        );
    }
}

export default Tip;