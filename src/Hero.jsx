import React from 'react';
import createReactClass from 'create-react-class';
import ImageCounter from './ImageCounter.jsx';

export default createReactClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function() {
        this.setState({ count: this.state.count + 1 });
    },
    
    render: function() {
        return (
            <div className="hero">
                <ImageCounter count={this.state.count} imageUrl={this.props.imageUrl} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});