import React from 'react';
import Card from './card';
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import PokemonDetails from './PokemonDetails';
const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokeDex, setPokeDex] = useState([]);
  

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
    <div > 
        <h1>The POKEDEX</h1>
        <div className = "card-container">
        {pokemonData.map((pokemon, index) => (
            <Card
            key={index}
            id={index + 1}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            />
        ))}
        </div>
    </div>
  );
};

export default Main;

