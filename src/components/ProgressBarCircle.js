import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
})

const ProgressBarCircle = (props) => {
  const classes = props.classes
  return (
    <div>
      <CircularProgress color="accent" className={classes.progress} size={100} />
    </div>
  )
}

ProgressBarCircle.propTypes = {
  classes: PropTypes.object.isRequired
}

ProgressBarCircle.defaultProps = {
  classes: {}
}

export default withStyles(styles)(ProgressBarCircle)
