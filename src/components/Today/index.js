import React from 'react';
import PropTypes from 'prop-types'
import './index.css';
import Location from '../../elements/Location';
import WeatherIcon from '../../elements/WeatherIcon';
import Temperature from '../../elements/Temperature';
import OtherData from '../../elements/OtherData';

/**
 *
 * @param cityName
 * @param weatherConditionsCode
 * @param temperature
 * @param feelLikeTemp
 * @param humidity
 * @returns {*}
 * @constructor
 */
const Today = ({cityName, weatherConditionsCode, temperature, feelLikeTemp, humidity}) => {
  return <div className={"todayComponent"}>
    <Location cityName={cityName}/>
    <WeatherIcon weatherConditionsCode={weatherConditionsCode} isBig={true}/>
    <Temperature temperature={temperature}/>
    <OtherData feelLikeTemp={feelLikeTemp} humidity={humidity}/>
  </div>
}

Today.propTypes = {
  cityName: PropTypes.string.isRequired,
  weatherConditionsCode: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  feelLikeTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired
};

export default Today;
