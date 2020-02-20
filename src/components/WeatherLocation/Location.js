import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const Location = ({city}) => (
   // Debugin:
   // console.log(props);
   // debugger;

   // Destructuring: asignar en forma directa

   //const city = props.city; Agarra city de props
   //const {city} = props;
   // al final se puede llamar a city directamente recibiendola

   <div className="locationCont">
      <h1>{city}</h1>
   </div>

);


// VALIDACION TIPO DE DATOS
Location.propTypes = {
   city: PropTypes.string.isRequired,
};

export default Location;