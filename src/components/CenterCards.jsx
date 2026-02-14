import React, {Component} from 'react';
import "./CenterCards.css"

const CenterCards = ({ img, title, cardparagraph1 }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p className='cardparagraph1'>{cardparagraph1}</p>
    </div>
  );
};

export default CenterCards;