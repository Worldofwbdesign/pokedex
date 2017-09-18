import React from 'react'
import { connect } from 'react-redux'

import Pagination from '../components/Pagination'

const PaginationContainer = (props) => {
  const { pokemonsPerPage, items, onChangePage, isSearchEmpty } = props

  return (
    <Pagination
      isSearchEmpty={isSearchEmpty}
      pokemonsPerPage={pokemonsPerPage}
      items={items}
      onChangePage={onChangePage}
    />
  )
}

const mapStateToProps = (state) => ({
  pokemonsPerPage: state.pokemonsPerPage
})

export default connect(mapStateToProps)(PaginationContainer)
