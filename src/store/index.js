import {createStore} from 'redux';
import {city} from './../reducers/city';

// estado inicial de la aplicacion
const initialState = { 
  // ciudad inicial
  city: 'Buenos Aires,ar'
};




export const store = createStore(city, initialState,
  // configuracion para extension de redux en Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
