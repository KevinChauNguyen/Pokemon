import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Moves:</h2>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      <h2>Abilities:</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Weight:</h2>
      <p>{pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetails;
