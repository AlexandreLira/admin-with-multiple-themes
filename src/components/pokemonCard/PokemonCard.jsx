import React from "react";
import './pokemonCard.css';

export const PokemonCad = (props) => {
    const { pokemon } = props

    console.log(pokemon.sprites.other['official-artwork'].front_default)
    return (
        <div className="pokemon-card">
            <img 
                src={pokemon.sprites.other['official-artwork'].front_default} 
                alt={pokemon.name} 
                style={{width: 100, height: 100}}
            />
            <p>Id: #{String(pokemon.id).padStart(4,0)}</p>
            <p>Nome: {pokemon.name}</p>
            <p>Experience: {pokemon.base_experience}</p>
            <p>Weight: {pokemon.weight}, Height: {pokemon.height}</p>
            <p>Price: {(((pokemon.weight / pokemon.height) * pokemon.base_experience) / (pokemon.base_experience)).toFixed(2)}</p>
            
        </div>
    )
}