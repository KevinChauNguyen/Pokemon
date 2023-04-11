import React from 'react';
import './style.css';

const Card = (pokemon,) => {
  return (
    <div classname = "card-container">
        <div className="card">
            <h2>{pokemon.id}</h2>
            <img src= {pokemon.image} alt = "" />
            <h2>{pokemon.name}</h2>
        </div>
    </div>
  );
};

export default Card;
