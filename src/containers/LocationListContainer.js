import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.dispatchSetCity(city);
      };

    render() {
        return (
            <LocationList cities={this.props.cities} 
              onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

// Refactor
const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
  });
export default  connect(null, mapDispatchToProps)(LocationListContainer);