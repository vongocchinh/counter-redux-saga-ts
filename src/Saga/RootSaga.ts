
import { all } from 'redux-saga/effects'
import CounterSaga from './counterSaga';


function* RootSaga() {
  yield all([CounterSaga()]);
}
export default RootSaga;