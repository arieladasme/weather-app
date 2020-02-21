import {createStore} from 'redux';

export const store = createStore(() => {}, 
  // configuracion para extension de redux en Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
