import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PokemonsList from '../components/PokemonsList'
import SearchBarContainer from './SearchBarContainer'
import PaginationContainer from '../containers/PaginationContainer'
import { requestGetPokemons } from '../redux/modules/pokemons/actions'
import filteredPokemons from '../redux/selectors/filteredPokemons'

const mapStateToProps = state => ({
  isUpdating: state.isUpdating,
  pokemons: state.pokemons,
  currentTypeList: state.currentTypeList,
  searchText: state.searchQuery,
  filteredPokemons: filteredPokemons(state)
})

@connect(mapStateToProps, { requestGetPokemons })
class PokemonsListContainer extends Component {
  state = {
    pageOfPokemons: []
  }

  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    filteredPokemons: PropTypes.array.isRequired
  }

  static defaultProps = {
    pokemons: [],
    filteredPokemons: []
  }

  onChangePage = pageOfPokemons => {
    // update state with new page of items
    this.setState({ pageOfPokemons })
  }

  componentDidMount () {
    this.props.requestGetPokemons()
  }

  render () {
    const { isUpdating, pokemons, filteredPokemons, searchText } = this.props
    // Show selected pokemons or whole list or pass emty search result prop
    const isSearchResultEmpty =
      filteredPokemons.length === 0 && searchText.length > 0
    const currentList =
      filteredPokemons.length > 0 ? filteredPokemons : pokemons

    return (
      <div>
        <div className="search-container">
          <SearchBarContainer />
        </div>
        <PokemonsList
          isUpdating={isUpdating}
          isSearchEmpty={isSearchResultEmpty}
          pokemons={this.state.pageOfPokemons}
        />
        <PaginationContainer
          isSearchEmpty={isSearchResultEmpty}
          items={currentList}
          onChangePage={this.onChangePage}
        />
      </div>
    )
  }
}

export default PokemonsListContainer
