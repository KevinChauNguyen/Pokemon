import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className= "pokeDetails">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className = "pokeImg"/>
      <h2>Moves:</h2>
      <p>
        {pokemon.moves.map((pokemon) => (
          <p>{pokemon.move.name}</p>
        ))}
      </p>
      <h2>Abilities:</h2>
      <p>
        {pokemon.abilities.map((pokemon) => (
          <p>{pokemon.ability.name}</p>
        ))}
      </p>
      <h2>Weight:</h2>
      <p>{pokemon.weight}</p>
      <Link to = "/">
        <button>Return to Pokedex</button>
      </Link>
    </div>
  );
};

export default PokemonDetails;
