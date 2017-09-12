import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import PokemonsList from './components/PokemonsList'
import PokemonInfo from './components/PokemonInfo'

const App = () =>
  <HashRouter>
    <div className="main-container">
      <Header />
      <Route exact path="/" component={PokemonsList} />
      <Route path="/pokemon/:id" component={PokemonInfo} />
    </div>
  </HashRouter>

export default App
