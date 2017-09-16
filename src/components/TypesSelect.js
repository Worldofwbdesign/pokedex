import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})

class TypesSelect extends Component {
  state = {
    value: 'none'
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    pokemonTypes: PropTypes.array.isRequired,
    setType: PropTypes.func.isRequired
  }

  static defaultProps = {
    classes: {},
    pokemonTypes: [],
    setType: () => null
  }

  renderTypesForSelect = () => {
    return this.props.pokemonTypes.map((type, index) => {
      return <MenuItem key={`${type}${index}`} value={type}>{type}</MenuItem>
    })
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ value })
    this.props.onRequestTypeList(e.target.value)
  }

  render () {
    const { classes } = this.props

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="types">Select type</InputLabel>
        <Select
          value={this.state.value}
          onChange={this.handleChange}
          input={<Input id="types" />}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.renderTypesForSelect()}
        </Select>
      </FormControl>
    )
  }
}

export default withStyles(styles)(TypesSelect)
