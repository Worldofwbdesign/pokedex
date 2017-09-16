import React, { Component } from 'react'
import { connect } from 'react-redux'

import TypesSelect from '../components/TypesSelect'
import { requestPokemonTypes } from '../redux/modules/pokemonTypes/actions'
import { requestTypeList } from '../redux/modules/currentTypeList/actions'

class TypesSelectContainer extends Component {
  componentDidMount () {
    this.props.requestPokemonTypes()
  }

  render () {
    const { pokemonTypes, requestTypeList } = this.props
    return <TypesSelect pokemonTypes={pokemonTypes} onRequestTypeList={requestTypeList}/>
  }
}

const mapStateToProps = (state) => ({
  pokemonTypes: state.pokemonTypes
})

export default connect(mapStateToProps, { requestPokemonTypes, requestTypeList })(TypesSelectContainer)
