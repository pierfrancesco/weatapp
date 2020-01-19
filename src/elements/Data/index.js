import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

/**
 *
 * @param minTemp
 * @param maxTemp
 * @returns {*}
 * @constructor
 */
const Data = ({minTemp = 0, maxTemp = 100}) => {
  return <div className={"dataComponent"}>{maxTemp}° - {minTemp}°</div>
}

Data.propTypes = {
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
};

export default Data;
