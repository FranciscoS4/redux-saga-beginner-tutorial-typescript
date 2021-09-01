/*eslint-disable no-unused-vars */
import React from 'react';
import {store, action} from '../../store'

const Counter = () =>
      <div>
        <button onClick={() => action('INCREMENT_ASYNC')}>
          Increment Async
        </button>
        <button onClick={() => action('INCREMENT')}>
          Increment
        </button>
        <button onClick={() => action('DECREMENT')}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {store.getState()} times
        </div>
      </div>

export default Counter