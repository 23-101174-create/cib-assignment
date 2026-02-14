import React, { Component } from 'react';
import "./Subtitle.css"

const Subtitle = ({text}) => {
    return (
        <p className='above-title'>{text}</p>
    )
}

export default Subtitle;