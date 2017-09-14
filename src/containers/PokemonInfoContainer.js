import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonInfo from '../components/PokemonInfo'
import { requestCurrentPokemon } from '../redux/modules/currentPokemon/actions'

class PokemonInfoContainer extends Component {
  state = {
    openPopup: true
  }

  handleRequestClose = () => {
    this.setState({ openPopup: false })
    setTimeout(() => {
      this.props.history.push('/')
    }, 200)
  }

  componentDidMount () {
    this.props.requestCurrentPokemon(this.props.match.params.id)
  }

  render () {
    return <PokemonInfo onRequestClose={this.handleRequestClose} open={this.state.openPopup} currentPokemon={this.props.currentPokemon} />
  }
}

const mapStateToProps = state => ({
  currentPokemon: state.currentPokemon
})

export default connect(mapStateToProps, { requestCurrentPokemon })(PokemonInfoContainer)
