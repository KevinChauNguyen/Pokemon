import React from 'react';
import Card from './card';
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        setPokemonData(response.data.results);
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      {pokemonData.map((pokemon, index) => (
        <Card
          key={index}
          id={index + 1}
          name={pokemon.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        />
      ))}
    </div>
  );
};

export default Main;
