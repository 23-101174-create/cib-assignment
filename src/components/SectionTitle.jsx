import React, { Component } from 'react';
import "./SectionTitle.css";

const SectionTitle = ({text}) => {
    return (
        <p className='title'>{text}</p>
    )
}

export default SectionTitle;