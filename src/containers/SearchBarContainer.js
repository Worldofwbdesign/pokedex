import React from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import { setSearchQuery } from '../redux/modules/searchQuery/actions'

const SearchBarContainer = (props) => <SearchBar onSearchQuery={props.setSearchQuery} />

export default connect(null, { setSearchQuery })(SearchBarContainer)
