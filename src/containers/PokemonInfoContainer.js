import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleIsCurrentUpdating } from '../redux/modules/isCurrentUpdating/actions'

import PokemonInfo from '../components/PokemonInfo'
import { requestCurrentPokemon } from '../redux/modules/currentPokemon/actions'

class PokemonInfoContainer extends Component {
  state = {
    openPopup: true
  }

  // Close popup
  handleRequestClose = () => {
    this.setState({ openPopup: false })
    setTimeout(() => {
      this.props.history.push('/')
    }, 200)
  }

  // Request for pokemon info
  componentDidMount () {
    this.props.requestCurrentPokemon(this.props.match.params.id)
  }

  // Set loading state for next opened pokemon
  componentWillUnmount () {
    this.props.toggleIsCurrentUpdating()
  }

  render () {
    const { isCurrentUpdating, currentPokemon } = this.props
    const id = this.props.match.params.id
    currentPokemon.avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
      <PokemonInfo
        isUpdating={isCurrentUpdating}
        onRequestClose={this.handleRequestClose}
        isOpened={this.state.openPopup}
        currentPokemon={currentPokemon}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isCurrentUpdating: state.isCurrentUpdating,
  currentPokemon: state.currentPokemon
})

export default connect(mapStateToProps, { requestCurrentPokemon, toggleIsCurrentUpdating })(PokemonInfoContainer)
