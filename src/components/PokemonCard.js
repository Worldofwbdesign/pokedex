import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PokemonCard = (props) => {
  const { name, sourceUrl } = props
  const urlParts = sourceUrl.split('/')
  const id = urlParts[urlParts.length - 2]
  const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <Link to={`/pokemon/${id}`} className="pokemon">
      <h3 className="pokemon__name">{name}</h3>
      <div className="pokemon__img-wrapp">
        <img src={avatar} alt={name} className="pokemon__avatar"/>
      </div>
    </Link>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired
}

PokemonCard.defaultProps = {
  name: 'Ninja Pokemon',
  sourceUrl: 'http://pokeapi.co/api/v1/pokemon/1/'
}

export default PokemonCard
