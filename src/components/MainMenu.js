import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import { drawerWidth } from '../utils/const'

import TypesSelectContainer from '../containers/TypesSelectContainer'
import PageCountSelectContainer from '../containers/PageCountSelectContainer'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64
    }
  }
})

const MainMenu = (props) => {
  const { classes, closeMenu, isMenuOpened } = props

  return (
    <Drawer
      type="persistent"
      classes={{
        paper: classes.drawerPaper
      }}
      open={isMenuOpened}
    >
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className="main-menu">
          <TypesSelectContainer />
          <PageCountSelectContainer />
        </div>
      </div>
    </Drawer>
  )
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired
}

MainMenu.defaultProps = {
  classes: {},
  closeMenu: () => null,
  isMenuOpened: true
}

export default withStyles(styles)(MainMenu)
