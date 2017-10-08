import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withState, compose } from 'recompose'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  }
})

const TypesSelect = props => {
  const { pokemonTypes, onRequestTypeList, value, setValue, classes } = props

  const renderTypesForSelect = () => {
    return pokemonTypes.map((type, index) => {
      return (
        <MenuItem key={`${type}${index}`} value={type}>
          {type}
        </MenuItem>
      )
    })
  }

  const handleChange = e => {
    const newValue = e.target.value

    if (newValue !== value) {
      setValue(newValue)
      onRequestTypeList(newValue)
    }
  }

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel htmlFor="types">Select type</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        input={<Input id="types" placeholder="None" />}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {renderTypesForSelect()}
      </Select>
    </FormControl>
  )
}

TypesSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemonTypes: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onRequestTypeList: PropTypes.func.isRequired
}

TypesSelect.defaultProps = {
  classes: {},
  pokemonTypes: [],
  value: 'none',
  setValue: () => null,
  onRequestTypeList: () => null
}

const enhance = compose(
  withStyles(styles),
  withState('value', 'setValue', 'none')
)

export default enhance(TypesSelect)
