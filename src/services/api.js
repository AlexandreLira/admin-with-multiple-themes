export const searchPokemon = async (pokemon) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.warn(error)
    }
}
export const getAllPokemons = async (item = {limit: 50, offset: 0}) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${item.limit}&offset=${item.offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.warn(error)
    }
}
export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.warn(error)
    }
}