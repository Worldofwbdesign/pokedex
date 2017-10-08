import React from 'react'
import PropTypes from 'prop-types'
import PokemonCard from './PokemonCard'
import LoaderHOC from '../HOC/LoaderHOC'

const PokemonsList = props => {
  const { isUpdating, pokemons, isSearchEmpty } = props

  if (isSearchEmpty) {
    return <span className="empty-search">No search results...</span>
  }

  return (
    <div className="pokemons-list">
      {pokemons.map((pokemon, index) => {
        return (
          <PokemonCard
            name={pokemon.name}
            sourceUrl={pokemon.resource_uri}
            key={`${pokemon.name}${index}`}
          />
        )
      })}
    </div>
  )
}

PokemonsList.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  pokemons: PropTypes.array.isRequired,
  isSearchEmpty: PropTypes.bool.isRequired
}

PokemonsList.defaultProps = {
  isUpdating: true,
  pokemons: [],
  isSearchEmpty: false
}

export default LoaderHOC('pokemons')(PokemonsList)
