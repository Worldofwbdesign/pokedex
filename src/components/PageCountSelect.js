import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import { pagerParams } from '../utils/const'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  }
})

const PageCountSelect = (props) => {
  const { classes, pokemonsPerPage, onSetPokemonsPerPage } = props

  const renderPagesForSelect = () => {
    return pagerParams.map((param, index) => {
      return <MenuItem key={`${param}${index}`} value={param}>{param}</MenuItem>
    })
  }

  const handleChange = (e) => {
    const value = e.target.value

    if (value !== pokemonsPerPage) {
      onSetPokemonsPerPage(e.target.value)
    }
  }

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel htmlFor="per-page">Pokemons per page</InputLabel>
      <Select
        value={pokemonsPerPage}
        onChange={handleChange}
        input={<Input id="per-page" />}
        fullWidth
      >
        {renderPagesForSelect()}
      </Select>
    </FormControl>
  )
}

PageCountSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemonsPerPage: PropTypes.number.isRequired,
  onSetPokemonsPerPage: PropTypes.func.isRequired
}

PageCountSelect.defaultProps = {
  classes: {},
  pokemonsPerPage: 40,
  onSetPokemonsPerPage: () => null
}

export default withStyles(styles)(PageCountSelect)
