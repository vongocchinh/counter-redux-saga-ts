
import { all } from 'redux-saga/effects'
import CounterSaga from './counterSaga';
import RootPokemon from './pokemon';


function* RootSaga() {
  yield all([CounterSaga(),RootPokemon()]);
}
export default RootSaga;