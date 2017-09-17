import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import _ from 'lodash'
import Button from 'material-ui/Button'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import FirstPageIcon from 'material-ui-icons/FirstPage'
import LastPageIcon from 'material-ui-icons/LastPage'

const styles = theme => ({
  pagination: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 30
  },
  button: {
    width: 40,
    height: 40,
    minWidth: 'auto',
    margin: theme.spacing.unit / 2,
    padding: '0px 11px'
  }
})

class Pagination extends Component {
  state = { pager: {} }

  static propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pokemonsPerPage: PropTypes.number
  }

  static defaultProps = {
    items: [],
    onChangePage: () => null,
    initialPage: 1,
    pokemonsPerPage: 20
  }

  componentWillMount () {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { items, pokemonsPerPage } = this.props
    const pageSize = this.state.pager.pageSize

    // reset page if items array has changed
    if (items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }

    // reset page ig page size has changed
    if (pageSize && (pageSize !== pokemonsPerPage)) {
      this.setPage(this.props.initialPage, pokemonsPerPage)
    }
  }

  setPage = (page, pageSize) => {
    const { items } = this.props
    let { pager } = this.state

    if (page < 1 || page > pager.totalPages) {
      return
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize)

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

    // update state
    this.setState({ pager })

    // call change page function in parent component
    this.props.onChangePage(pageOfItems)
  }

  getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1

    // default page size
    pageSize = pageSize || this.props.pokemonsPerPage

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize)

    let startPage, endPage
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1)

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    }
  }

  render () {
    const { pager } = this.state
    const { classes } = this.props
    const firstPageDisabling = pager.currentPage === 1
    const lastPageDisabling = pager.currentPage === pager.totalPages

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null
    }

    return (
      <nav className="pagination" className={classes.pagination}>
        <Button
          onClick={() => this.setPage(1)}
          className={classes.button}
          disabled={firstPageDisabling}
        >
          <FirstPageIcon />
        </Button>
        <div>
          <Button
            onClick={() => this.setPage(pager.currentPage - 1)}
            className={classes.button}
            disabled={firstPageDisabling}
          >
            <ChevronLeftIcon />
          </Button>
        </div>
        {pager.pages.map((page, index) =>
          <Button
            key={index}
            color={pager.currentPage === page ? 'accent' : 'primary'} 
            onClick={() => this.setPage(page)} 
            className={classes.button}
          >
            {page}
          </Button>
        )}
        <Button
          disabled={lastPageDisabling}
          onClick={() => this.setPage(pager.currentPage + 1)}
          className={classes.button}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          disabled={lastPageDisabling}
          onClick={() => this.setPage(pager.totalPages)}
          className={classes.button}
        >
          <LastPageIcon className={classes.icon}/>
        </Button>
      </nav>
    )
  }
}

export default withStyles(styles)(Pagination)
