import React, {Component} from 'react';
import "./CenterCards.css"

const CenterCards = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CenterCards;