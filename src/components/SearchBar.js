import React from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  textField: {
    width: '100%',
    margin: 100,
    marginBottom: 100
  }
})

const SearchBar = (props) => {
  const handleChange = (e) => props.onSearchQuery(e.target.value)

  return <TextField
    id="search"
    label="Search"
    margin="normal"
    fullWidth
    onChange={handleChange}
  />
}

export default withStyles(styles)(SearchBar)
