import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../api'

import actionTypes from '../modules/pokemonTypes/actionTypes'
import { getPokemonTypes, handleError } from '../modules/pokemonTypes/actions'

export function * requestPokemonTypesSaga () {
  try {
    // get pokemons list from api
    const pokemonTypes = yield call(API.fetchPokemonTypes, [])
    // Map pokemon types names
    const pokemonTypesNames = pokemonTypes.map((pokemonType) => pokemonType.name)
    // put pokemons list to state
    yield put(getPokemonTypes(pokemonTypesNames))
  } catch (e) {
    yield put(handleError())
    throw new Error(e)
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function * watchRequestPokemonTypes () {
  yield takeEvery(actionTypes.POKEMON_TYPES_REQUEST, requestPokemonTypesSaga)
}
