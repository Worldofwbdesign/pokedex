import React from 'react'
import { connect } from 'react-redux'

import PageCountSelect from '../components/PageCountSelect'
import { setPokemonsPerPage } from '../redux/modules/pokemonsPerPage/actions'

const pokemonsPerPageSelectContainer = (props) => {
  const { pokemonsPerPage, setPokemonsPerPage } = props

  return <PageCountSelect pokemonsPerPage={pokemonsPerPage} onSetPokemonsPerPage={setPokemonsPerPage}/>
}

const mapStateToProps = (state) => ({
  pokemonsPerPage: state.pokemonsPerPage
})

export default connect(mapStateToProps, { setPokemonsPerPage })(pokemonsPerPageSelectContainer)
