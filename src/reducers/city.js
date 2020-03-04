import {SET_CITY} from './../actions';

// REDUCER QUE MODIFICA EL ESTADO

// permite manejar la ciudad activa (agregando a state el = {} asegura el estalecerle un valor por defecto (es6) )
export const city = (state = {}, action) => {
    // detectar si action 
    switch (action.type) {
        // cuando se genere una accion de tipo SET_CITY
        case SET_CITY:
            // retorna estado anterior y action
            return {...state, city: action.value}
    
        default:
            return state;
    }
  }