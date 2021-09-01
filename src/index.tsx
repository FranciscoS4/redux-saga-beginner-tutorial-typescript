import React from 'react';
import ReactDOM from 'react-dom';
import Counter, { store } from './components/Counter';

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <Counter/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)