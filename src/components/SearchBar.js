import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import debounce from 'lodash/debounce'

const styles = theme => ({
  textField: {
    width: '100%',
    margin: 100,
    marginBottom: 100
  }
})

const SearchBar = (props) => {
  const handleChange = (e) => {
    const debounced = debounce(props.onSearchQuery, 300)
    debounced(e.target.value.toLowerCase())
  }

  return <TextField
    id="search"
    label="Search"
    margin="normal"
    fullWidth
    onChange={handleChange}
  />
}

SearchBar.propTypes = {
  onSearchQuery: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
  onSearchQuery: () => null
}

export default withStyles(styles)(SearchBar)
