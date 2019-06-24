import React, { Component } from 'react';

class Alert extends Component {
    render() {
        const { className, message } = this.props;
        return (
            <div className={className}>
                {message}
            </div>
        )
    }
}

export default Alert