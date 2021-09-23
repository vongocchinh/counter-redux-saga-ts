import { put, takeEvery, call, delay, takeLatest } from "@redux-saga/core/effects";

import apiPokemon from "../api/PokemonApi";
import { getAll, getAllSuccess, search, searchSuccess } from "../pokemon/pokemonSlice";
import { PayloadAction } from '@reduxjs/toolkit';
import { PokemonModel } from './../pokemon/pokemonSlice';



function* GET_POKEMON() {
  const data = yield call(() => apiPokemon.getAll().then(e=> {
    return e.results
  }));
  yield delay(1000);
  yield put(getAllSuccess(data));
  return data;
}

function* searchFun(payload:PayloadAction<String>){
 yield delay(300);
 yield console.log("value :"+payload.payload);

 const data = yield call(() => apiPokemon.getAll().then(e=> {
  return e.results
}));
  var  dataNew = data.filter((data: PokemonModel) => {
    return data.name.toLowerCase().indexOf(payload.payload.toString()) !== -1;
});
  yield put(searchSuccess(dataNew));
}

function* RootPokemon() {
  yield takeEvery(getAll, GET_POKEMON);
  yield takeLatest(search,searchFun);
}

export default RootPokemon;