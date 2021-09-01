/*eslint-disable no-unused-vars */
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../../store/reducer';

import rootSaga from '../../store/sagas';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const action = (type: any) => store.dispatch({type})

const Counter = () =>
      <div>
        <button onClick={() => action('INCREMENT_ASYNC')}>
          Increment Async
        </button>
        {' '}
        <button onClick={() => action('INCREMENT')}>
          Increment
        </button>
        {' '}
        <button onClick={() => action('DECREMENT')}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {store.getState()} times
        </div>
      </div>

export default Counter