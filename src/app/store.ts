import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import createSagaMiddleware from 'redux-saga';

import saga from './../Saga/RootSaga';
import pokemonSlice from './../pokemon/pokemonSlice';

const sagaMiddleware=createSagaMiddleware();


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon:pokemonSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
