import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import { drawerWidth } from '../utils/const'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: 'auto',
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

class MainMenu extends Component {
  render () {
    const { classes, closeMenu, isMenuOpened } = this.props

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
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(MainMenu)
