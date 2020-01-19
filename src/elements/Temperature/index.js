import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

/**
 *
 * @param temperature
 * @param unit
 * @returns {*}
 * @constructor
 */
const Temperature = ({temperature = 0, unit = 'm'}) => {
  return <div className={"temperatureContent"}>{temperature}°</div>
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  unit: PropTypes.string
};

export default Temperature;
