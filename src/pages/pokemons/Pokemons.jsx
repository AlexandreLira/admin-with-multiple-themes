import React, { useEffect, useState } from "react";
import { PokemonCad } from "../../components/pokemonCard/PokemonCard";
import { getAllPokemons, getPokemonData, searchPokemon } from "../../services/api";

export const Pokemons = () => {

    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemons] = useState([])

    const fetchPokemons = async () => {
        try{
            setLoading(true)
            const { results } = await getAllPokemons({limit: 50, offset: 0})
            const pokemonsPromises = results.map(async item => await getPokemonData(item.url))
            const pokemonDataList = await Promise.all(pokemonsPromises)

            setPokemons(pokemonDataList)
            setLoading(false)
        } catch(error) {
            console.warn('fetch pokemons error: ', error)
        }

    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div style={{flexWrap: 'wrap', display: 'flex'}}>
            {pokemons.map((pokemon, index) => {
                return(
                    <PokemonCad pokemon={pokemon}/>
                )
            })}
        </div>
    )
}