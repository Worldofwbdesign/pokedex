import { all } from 'redux-saga/effects'

import pokemonsSaga from './pokemonsSaga'
import currentPokemonSaga from './currentPokemonSaga'
import pokemonTypesSaga from './pokemonTypesSaga'
import typeListSaga from './typeListSaga'

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([
    pokemonsSaga(),
    currentPokemonSaga(),
    pokemonTypesSaga(),
    typeListSaga()
  ])
}
