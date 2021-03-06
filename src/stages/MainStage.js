import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import compose from 'recompose/compose'
import { drawerWidth } from '../utils/const'

import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import PokemonsListContainer from '../containers/PokemonsListContainer'
import { openMenu, closeMenu } from '../redux/modules/isMenuOpened/actions'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  hide: {
    display: 'none'
  },
  content: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    marginLeft: -drawerWidth,
    paddingBottom: 110,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    minHeight: 'calc(100vh - 56px)',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px)',
      height: 'calc(100% - 64px)',
      marginTop: 64,
      paddingBottom: 80
    }
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
})

class MainStage extends Component {
  state = {
    open: false
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    pokemonTypes: PropTypes.array.isRequired,
    isMenuOpened: PropTypes.bool,
    openMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
  }

  static defaultProps = {
    classes: {},
    pokemonTypes: [],
    isMenuOpened: true,
    openMenu: () => null,
    closeMenu: () => null
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render () {
    const { classes, openMenu, closeMenu, isMenuOpened, pokemonTypes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header isMenuOpened={isMenuOpened} openMenu={openMenu} />
          <MainMenu pokemonTypes={pokemonTypes} isMenuOpened={isMenuOpened} closeMenu={closeMenu} />
          <main className={classNames(classes.content, isMenuOpened && classes.contentShift)}>
            <PokemonsListContainer />
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isMenuOpened: state.isMenuOpened,
  pokemonTypes: state.pokemonTypes
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { openMenu, closeMenu })
)(MainStage)
