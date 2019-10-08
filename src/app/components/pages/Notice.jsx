import React from 'react';
import { Link } from 'react-router';
import tt from 'counterpart';

class Notice extends React.Component {
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
