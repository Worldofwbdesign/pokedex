import React from 'react'
import PropTypes from 'prop-types'
import PokemonCard from './PokemonCard'
import ProgressBarCircle from './ProgressBarCircle'

const PokemonsList = props => {
  const { isUpdating, pokemons } = props

  if (isUpdating) {
    return (
      <div className="progress-bar-container">
        <ProgressBarCircle />
      </div>
    )
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
