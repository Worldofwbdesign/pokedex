import React from 'react'
import PropTypes from 'prop-types'

const PokemonsList = props => {
  const { isUpdating, pokemons } = props

  if (isUpdating) {
    return <h1>Updating</h1>
  }

  return (
    <div className="pokemons-list">
      {pokemons.map(pokemon => {
        return pokemon.name
      })}
    </div>
  )
}

PokemonsList.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  pokemons: PropTypes.array.isRequired
}

export default PokemonsList
