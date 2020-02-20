import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

// data para WeatherData
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'nomr',
    wind: 'normal'
};
*/

const api_key = "45b7ebdd7eb9f57b79dc91ea820eb51d";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    

    componentDidMount(){
        // fecth o axios. en este caso usaremos fetch
        this.updateCity(this.props.city);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.city !== this.props.city){
            console.log("prop de ciudad previa",prevProps.city)
            console.log("prop de ciudad actual actualizada en el render",this.props.city)
            this.setState({forecastData:null})
            this.updateCity(this.props.city);//this.props.ciudad es la que vienen al hacer click y se actualiza cuando entra al render
        }
    }
     
    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        )
    }

    renderForecastItemDays(forecastData){ // ejemplo de generacion de arreglos o foreach
        return forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} />));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render(){
    const {city} = this.props;
    const {forecastData} = this.state;
    return (
    <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        {forecastData ?
        this.renderForecastItemDays(forecastData) :
        this.renderProgress()}
    </div>);
    };
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}


export default ForecastExtended;