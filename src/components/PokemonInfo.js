import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

const PokemonInfo = (props) => {
  const { onRequestClose, currentPokemon } = props
  const { name } = currentPokemon

  const handleRequestClose = () => {
    onRequestClose()
  }

  return (
    <div>
      <Dialog open={props.open} onRequestClose={handleRequestClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PokemonInfo
