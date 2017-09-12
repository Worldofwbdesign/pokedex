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
    // get offices object from firebase
    const pokemons = yield call(API.fetchPokemonsList, null)
    // Remove preloader
    yield put(toggleIsUpdating())
    // put offices object to state
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