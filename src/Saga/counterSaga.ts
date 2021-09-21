import { increment, incrementNumberSaga, incrementNumberSagaSuccess, decrement, incrementSuccess, decrementSuccess, } from '../features/counter/counterSlice';
import { takeEvery, put, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';

function* incrementSagaFun(payload: PayloadAction<number>) {
    yield delay(2000);
    yield put(incrementNumberSagaSuccess(payload.payload));
}

function* incrementFun() {
    yield put(incrementSuccess());
}

function* decrementFun() {
    yield put(decrementSuccess());
}

function* CounterSaga() {
    yield takeEvery(incrementNumberSaga, incrementSagaFun);
    yield takeEvery(increment().type, incrementFun);
    yield takeEvery(decrement().type, decrementFun);
}

export default CounterSaga;