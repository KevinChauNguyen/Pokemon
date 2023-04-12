import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Card = (pokemon,) => {
  return (
    <div>
        <div className="card">
            <h2>{pokemon.id}</h2>
            <img src= {pokemon.image} alt = "" />
            <h2>{pokemon.name}</h2>
            <Link to={`/pokemon/${pokemon.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    </div>
  );
};

export default Card;
