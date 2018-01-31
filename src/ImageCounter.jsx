import React from 'react';

export default function ImageCounter(props) {
    return (
        <div className="image-counter">
            <img src={props.imageUrl} onClick={props.onCount} />
            <div className="count">{props.count}</div>
        </div>
    );
}