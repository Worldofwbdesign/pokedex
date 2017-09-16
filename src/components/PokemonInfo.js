import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import ProgressBarCircle from './ProgressBarCircle'

const styles = (theme) => ({
  dialogContentLoading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 250,
    minHeight: 200
  }
})

const PokemonInfo = (props) => {
  const { classes, isUpdating, onRequestClose, currentPokemon, isOpened } = props
  const { name, avatar, abilities, hp, attack, defense, speed, sp_atk: spAtk, sp_def: spDef } = currentPokemon

  const handleRequestClose = () => onRequestClose()

  const renderAbilities = () =>
    abilities.map((ability, index) => {
      return <span className="ability" key={index}>{ability.name}</span>
    })

  const renderCharacs = () =>
    <div className="list__points">
      <ul className="basic-list">
        <li className="basic-list__item" key="hp"><b>HP:</b> {hp}</li>
        <li className="basic-list__item" key="attack"><b>Attack:</b> {attack}</li>
        <li className="basic-list__item" key="defense"><b>Defense:</b> {defense}</li>
        <li className="basic-list__item" key="speed"><b>Speed:</b> {speed}</li>
        <li className="basic-list__item" key="spatk"><b>Sp Atk:</b> {spAtk}</li>
        <li className="basic-list__item" key="spdef"><b>Sp Def:</b> {spDef}</li>
      </ul>
    </div>

  const renderLoadingProgress = () =>
    <div>
      <DialogTitle>Looking for pokemon...</DialogTitle>
      <DialogContent className={classes.dialogContentLoading}>
        <ProgressBarCircle />
      </DialogContent>
    </div>

  return (
    <div className="pokemon">
      <Dialog open={isOpened} onRequestClose={handleRequestClose}>
        {/* Render progress bar during pokemon info loading */}
        {isUpdating
          ? renderLoadingProgress()
          : <div>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent className={classes.dialogContentLoading}>
              <div className="list">
                <div className="list__item">
                  <span className="list__title">Abilities:</span>
                  <div className="list__points">{renderAbilities()}</div>
                </div>
                <div className="list__item list__item_flex">
                  <div className="pokemon__avatar">
                    <img src={avatar} alt={name}/>
                  </div>
                  {renderCharacs()}
                </div>
              </div>

            </DialogContent>
          </div> }
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

PokemonInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  isUpdating: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  currentPokemon: PropTypes.object.isRequired,
  isOpened: PropTypes.bool
}

PokemonInfo.defaultProps = {
  classes: {},
  isUpdating: true,
  onRequestClose: () => null,
  currentPokemon: {},
  isOpened: true
}

export default withStyles(styles)(PokemonInfo)
