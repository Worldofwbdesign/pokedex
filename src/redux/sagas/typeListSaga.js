import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../api'

import actionTypes from '../modules/currentTypeList/actionTypes'
import { getTypeList, handleError } from '../modules/currentTypeList/actions'
import { toggleIsUpdating } from '../modules/isUpdating/actions'

export function * requestTypeListSaga (action) {
  try {
    // Start preloader
    yield put(toggleIsUpdating())

    const type = action.payload.toLowerCase()

    // Null types list and show all pokemons, if user selectyed 'none'
    if (!type || type.length === 0) {
      // Remove preloader
      yield put(toggleIsUpdating())
      // put pokemons type list to state
      yield put(getTypeList([]))
    } else {
      // get pokemons type list from api
      const pokemons = yield call(API.fetchTypeList, type)
      const mappedPokemons = API.mapPokemonsTypeList(pokemons)
      // Remove preloader
      yield put(toggleIsUpdating())
      // put pokemons type list to state
      yield put(getTypeList(mappedPokemons))
    }
  } catch (e) {
    yield put(toggleIsUpdating())
    yield put(handleError())
    throw new Error(e)
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function * watchRequestTypeListSaga () {
  yield takeEvery(actionTypes.TYPE_LIST_REQUEST, requestTypeListSaga)
}
