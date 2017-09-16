import React from 'react'
import PropTypes from 'prop-types'
import PokemonCard from './PokemonCard'

const PokemonsList = props => {
  const { isUpdating, pokemons } = props

  if (isUpdating) {
    return <h1>Updating</h1>
  }

  return (
    <div className="pokemons-list">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name} sourceUrl={pokemon.resource_uri} key={index} />
      })}
    </div>
  )
}

PokemonsList.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  pokemons: PropTypes.array.isRequired
}

PokemonsList.defaultProps = {
  isUpdating: true,
  pokemons: []
}

export default PokemonsList
