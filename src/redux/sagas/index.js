import { all } from 'redux-saga/effects'

import pokemonsSaga from './pokemonsSaga'
import currentPokemonSaga from './currentPokemonSaga'

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([
    pokemonsSaga(),
    currentPokemonSaga()
  ])
}
