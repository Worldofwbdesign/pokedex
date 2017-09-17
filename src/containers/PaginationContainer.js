import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Pagination from '../components/Pagination'

const PaginationContainer = (props) => {
  const { pokemonsPerPage, items, onChangePage } = props

  return (
    <Pagination
      pokemonsPerPage={pokemonsPerPage}
      items={items}
      onChangePage={onChangePage}
    />
  )
}

PaginationContainer.propTypes = {
  pokemonsPerPage: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired
}

PaginationContainer.defaultProps = {
  pokemonsPerPage: 20,
  items: [],
  onChangePage: () => null
}

const mapStateToProps = (state) => ({
  pokemonsPerPage: state.pokemonsPerPage
})

export default connect(mapStateToProps)(PaginationContainer)
