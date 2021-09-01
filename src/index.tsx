import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store'
import Counter from './components/Counter';

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

