import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import reducers from './redux'
import rootSaga from './redux/sagas'

import '../styles/main.sass'

import MainStage from './stages/MainStage'
import PokemonInfoContainer from './containers/PokemonInfoContainer'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <div className="main-container">
          <Route path="/" component={MainStage} />
          <Route path="/pokemon/:id" component={PokemonInfoContainer} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
)

export default App
