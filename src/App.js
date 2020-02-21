import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import {store} from './store';

const cities = [
  'Buenos Aires,ar',
  'Barcelona,es',
  'Washington,us',
  'Bodo,no',
  'Lima,pe',
];




class App extends Component {

  constructor(){
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city}); // esto es igual a city: city
    console.log(`handleSelectedLocation ${city}`);   
    
    
    store.dispatch(setCity(city));
  };

  render(){
    const { city } = this.state; 
    return (
      <Grid className="App">
        <Row> 
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>Wheather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                { city && // si city contiene algo muestra ForecastExtended, si no es null
                  <ForecastExtended city={city}/>
                }
                
              </div>
            </Paper>
          </Col>
        </Row>
         
      </Grid>
    );
  }
}

export default App;
