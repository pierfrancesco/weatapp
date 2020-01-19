import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Day from '../../elements/Day';
import WeatherIcon from '../../elements/WeatherIcon';
import Data from '../../elements/Data';

const WeekDay = ({dayNameShort, dayNumber, weatherConditionsCode, minTemp, maxTemp, isFirst = false}) => {
  return <div className={"weekDayComponent" + (isFirst ? ' nextDay' : '')}>
    <Day dayNameShort={dayNameShort} dayNumber={dayNumber}/>
    <WeatherIcon weatherConditionsCode={weatherConditionsCode}/>
    <Data minTemp={minTemp} maxTemp={maxTemp}/>
  </div>
}

WeekDay.propTypes = {
  dayNameShort: PropTypes.string.isRequired,
  dayNumber: PropTypes.string.isRequired,
  weatherConditionsCode: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired
};

export default WeekDay;
