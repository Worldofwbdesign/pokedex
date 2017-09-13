import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonsList from '../components/PokemonsList'
import { requestGetPokemons } from '../redux/modules/pokemons/actions'

class PokemonsListContainer extends Component {
  componentDidMount () {
    this.props.requestGetPokemons()
  }

  render () {
    const { isUpdating, pokemons } = this.props
    return <PokemonsList isUpdating={isUpdating} pokemons={pokemons} />
  }
}

const mapStateToProps = state => ({
  isUpdating: state.isUpdating,
  pokemons: state.pokemons
})

export default connect(mapStateToProps, { requestGetPokemons })(PokemonsListContainer)
