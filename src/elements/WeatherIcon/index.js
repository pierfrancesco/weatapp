import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/**
 *
 * @param weatherConditionsCode
 * @param isBig
 * @returns {*}
 * @constructor
 */
const WeatherIcon = ({weatherConditionsCode, isBig = false}) => {

  let classToAssing = 'rainy';
  let rainyLikeCodes = [200, 201, 202, 230, 231, 232, 233, 500, 501, 502, 511, 520, 521, 522, 900];
  let sunnyLikeCodes = [800, 801, 802];
  let cloudyLikeCodes = [611, 612, 700, 711, 721, 803, 804];
  let snowyLikeCodes = [300, 301, 302, 600, 601, 602, 610, 621, 622, 623, 731, 741, 751];

  if (rainyLikeCodes.indexOf(weatherConditionsCode) !== -1) classToAssing = 'rainy';
  if (sunnyLikeCodes.indexOf(weatherConditionsCode) !== -1) classToAssing = 'sunny';
  if (cloudyLikeCodes.indexOf(weatherConditionsCode) !== -1) classToAssing = 'cloudy';
  if (snowyLikeCodes.indexOf(weatherConditionsCode) !== -1) classToAssing = 'snowy';

  return <div className={classToAssing + (isBig ? ' big' : '')}/>
}

WeatherIcon.propTypes = {
  weatherConditionsCode: PropTypes.number.isRequired,
  isBig: PropTypes.bool
};

export default WeatherIcon;
