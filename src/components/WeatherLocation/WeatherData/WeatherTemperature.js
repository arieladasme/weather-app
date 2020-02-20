import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';
import './style.css';



const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "date-thunderstorm",
    [DRIZZLE]: "day-showers",
}; 

// ICONOS
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
}


// MAIN
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState) 
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);


// VALIDACION TIPO DE DATOS
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;