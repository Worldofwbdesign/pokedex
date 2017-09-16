import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonsList from '../components/PokemonsList'
import SearchBarContainer from './SearchBarContainer'
import { requestGetPokemons } from '../redux/modules/pokemons/actions'
import API from '../redux/api'

class PokemonsListContainer extends Component {
  componentDidMount () {
    this.props.requestGetPokemons()
  }

  render () {
    const { isUpdating, pokemons, currentTypeList, searchText } = this.props
    // Show pokemons by types, if they are selected by user and fetched
    const currentList = (currentTypeList.length > 0) ? currentTypeList : pokemons
    const filteredPokemons = API.filterPokemons(currentList, searchText)

    return (
      <div>
        <div className="search-container">
          <SearchBarContainer />
        </div>
        <PokemonsList isUpdating={isUpdating} pokemons={filteredPokemons} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isUpdating: state.isUpdating,
  pokemons: state.pokemons,
  currentTypeList: state.currentTypeList,
  searchText: state.searchQuery
})

export default connect(mapStateToProps, { requestGetPokemons })(PokemonsListContainer)
