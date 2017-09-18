import React from 'react'
import PropTypes from 'prop-types'
import PokemonCard from './PokemonCard'
import ProgressBarCircle from './ProgressBarCircle'

const PokemonsList = props => {
  const { isUpdating, pokemons, isSearchEmpty } = props

  if (isUpdating) {
    return (
      <div className="progress-bar-container">
        <ProgressBarCircle />
      </div>
    )
  }

  if (isSearchEmpty) {
    return <span className="empty-search">No search results...</span>
  }

  return (
    <div className="pokemons-list">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name} sourceUrl={pokemon.resource_uri} key={`${pokemon.name}${index}`} />
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

export default PokemonsList
