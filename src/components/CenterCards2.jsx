import React, {Component} from 'react';
import "./CenterCards2.css"

const CenterCards2 = ({ img, title, cardparagraph }) => {
  return (
    <div className="card2">
      <img src={img} alt={title} />
      <div className='cards-box-text'>
      <p>{title}</p>
      <p className='cardparagraph'>{cardparagraph}</p>
      </div>
    </div>
  );
};

export default CenterCards2;