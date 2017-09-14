// @flow
import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../api'

import actionTypes from '../modules/pokemons/actionTypes'
import { getPokemons, handleError } from '../modules/pokemons/actions'
import { toggleIsUpdating } from '../modules/isUpdating/actions'

export function * requestPokemonsSaga () {
  try {
    // Start preloader
    yield put(toggleIsUpdating())
    // get pokemons list from api
    const pokemons = yield call(API.fetchPokemonsList, [])
    // Remove preloader
    yield put(toggleIsUpdating())
    // put pokemons list to state
    yield put(getPokemons(pokemons))
  } catch (e) {
    yield put(toggleIsUpdating())
    yield put(handleError())
    throw new Error(e)
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function * watchRequestOfficesSaga () {
  yield takeEvery(actionTypes.POKEMONS_REQUEST, requestPokemonsSaga)
}
