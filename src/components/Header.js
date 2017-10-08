import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { drawerWidth } from '../utils/const'

const styles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
})

const Header = props => {
  const { classes, openMenu, isMenuOpened } = props

  return (
    <AppBar
      className={classNames(
        classes.appBar,
        isMenuOpened && classes.appBarShift
      )}
    >
      <Toolbar disableGutters={!isMenuOpened}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={openMenu}
          className={classNames(
            classes.menuButton,
            isMenuOpened && classes.hide
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" noWrap>
          Pokedex
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired
}

Header.defaultProps = {
  classes: {},
  openMenu: () => null,
  isMenuOpened: true
}

export default withStyles(styles)(Header)
