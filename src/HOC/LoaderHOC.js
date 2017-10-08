import React, { Component } from 'react'
import ProgressBarCircle from '../components/ProgressBarCircle'

const LoaderHOC = propName => WrappedComponent => {
  return class LoaderHOC extends Component {
    componentDidMount () {
      this.startTime = Date.now()
    }

    componentWillUpdate () {
      this.endTime = Date.now()
    }

    isEmpty (prop) {
      return (
        prop === undefined ||
        prop === null ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      )
    }

    render () {
      console.log(this.props.pokemons)
      const ownProps = {
        loadingTime: this.endTime - this.startTime / 1000
      }
      return this.isEmpty(this.props[propName]) ? (
        <div className="progress-bar-container">
          <ProgressBarCircle />
        </div>
      ) : (
        <WrappedComponent {...this.props} {...ownProps} />
      )
    }
  }
}

export default LoaderHOC
