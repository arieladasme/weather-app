import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {PropTypes} from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;

        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
       
    }

    
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
           return resolve.json();
        }).then(data => {
            //console.log("Resultado handleUpdateClick");
            const newWeather = transformWeather(data);
            //console.log(newWeather);
            this.setState({
                data: newWeather
            });
            
            
        });
                
    }

    render(){
        //console.log("render");
        //Desctructuring °°°°° <button onClick={this.handleUpdateClick}>Actualizar</button>
        const {city, data} = this.state;
        const {locationClick} = this.props;
        return(
            <div className="weatherLocationCont" onClick={locationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <LinearProgress />}
            </div>
        );
    }
}
    

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    locationClick: PropTypes.func,
}

export default WeatherLocation;