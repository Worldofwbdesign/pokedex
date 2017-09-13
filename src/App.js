import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import MainStage from './stages/MainStage'
import Header from './components/Header'
import PokemonsList from './components/PokemonsList'
import PokemonInfo from './components/PokemonInfo'

const App = () =>
  <HashRouter>
    <div className="main-container">
      <Route exact path="/" component={MainStage} />
      <Route path="/pokemon/:id" component={PokemonInfo} />
    </div>
  </HashRouter>

export default App
