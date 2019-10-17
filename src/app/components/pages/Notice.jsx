import React from 'react';
import { Link } from 'react-router';
import tt from 'counterpart';
import axios from 'axios';

async function callApi(url, params) {
    return await axios({
        url,
        method: 'GET',
        params,
    })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.error(`Could not fetch data, url: ${url}`);
            return {};
        });
}

class Notice extends React.Component {
    constructor() {
        super();
        this.state = {};
        console.log('Notice constructor');

        callApi('https://passionbull.github.io/steemcoinpan/sctpins').then(
            results => {
                console.log(results);
            }
        );
    }

    componentDidUpdate(prevProps) {}

    render() {
        return (
            <div className="row">
                <div className="column">{'Notice'}</div>
            </div>
        );
    }
}
module.exports = {
    path: 'notice',
    component: Notice,
};
