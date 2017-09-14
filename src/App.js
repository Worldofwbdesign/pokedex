import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import MainStage from './stages/MainStage'
import PokemonInfoContainer from './containers/PokemonInfoContainer'

const App = () =>
  <HashRouter>
    <div className="main-container">
      <Route path="/" component={MainStage} />
      <Route path="/pokemon/:id" component={PokemonInfoContainer} />
    </div>
  </HashRouter>

export default App
