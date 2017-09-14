// @flow
import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../api'

import actionTypes from '../modules/currentPokemon/actionTypes'
import { getCurrentPokemon, handleError } from '../modules/currentPokemon/actions'

export function * requestCurrentPokemonSaga (action) {
  try {
    // get current opened pokemon data from api
    const pokemon = yield call(API.fetchCurrentPokemon, action.payload)
    // put current opened pokemon to state
    yield put(getCurrentPokemon(pokemon))
  } catch (e) {
    yield put(handleError())
    throw new Error(e)
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function * watchRequestCurrentPokemonSaga () {
  yield takeEvery(actionTypes.CURRENT_POKEMON_REQUEST, requestCurrentPokemonSaga)
}
