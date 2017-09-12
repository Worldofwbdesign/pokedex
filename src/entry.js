import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import App from './App'
import '../styles/main.sass'

import reducers from './redux'
import rootSaga from './redux/sagas'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
