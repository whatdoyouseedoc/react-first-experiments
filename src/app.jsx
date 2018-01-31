import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import ImageCounter from './ImageCounter.jsx';
import Hero from './Hero.jsx';

export default createReactClass({
    render: function() {
        return (
            <div className="app">
                {this.props.heroes.map(function(hero) {
                    return (
                        <Hero key={hero.id}
                            title={hero.title}
                            subtitle={hero.subtitle}
                            imageUrl={hero.imageUrl}
                        />
                    );
                })}
            </div>
        );
    }
});