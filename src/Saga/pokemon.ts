import { put, takeEvery, call, delay } from "@redux-saga/core/effects";

import apiPokemon from "../api/PokemonApi";
import { getAll, getAllSuccess } from "../pokemon/pokemonSlice";



function* GET_POKEMON() {
  const data = yield call(() => apiPokemon.getAll().then(e=> {
    return e.results
  }));
  yield delay(1000);
  yield put(getAllSuccess(data));
  return data;
}
function* RootPokemon() {
  yield takeEvery(getAll, GET_POKEMON);
}

export default RootPokemon;