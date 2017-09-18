import { createSelector } from 'reselect'

const pokemonsSelector = state => state.pokemons
const currentTypeListSelector = state => state.currentTypeList
const searchQuery = state => state.searchQuery

const getFilteredPokemons = (pokemonsList, currentTypeList, searchQuery) => {
  const currentList = (currentTypeList.length > 0) ? currentTypeList : pokemonsList
  const filteredPokemons = currentList.filter((pokemon) => {
    return pokemon.name.indexOf(searchQuery) > -1
  })

  return filteredPokemons
}

export default createSelector(
  pokemonsSelector,
  currentTypeListSelector,
  searchQuery,
  getFilteredPokemons
)
