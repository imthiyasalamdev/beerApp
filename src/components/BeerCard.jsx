import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BeerCard = ({ beer }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={beer.image} className="card-img-top" alt={beer.name} />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.description}</p>
      </div>
    </div>
  );
};

export default BeerCard;
