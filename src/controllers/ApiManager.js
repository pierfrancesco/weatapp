import config from '../config';

/**
 *
 * @param latitude
 * @param longitude
 * @returns {Promise<any>}
 */
const getCurrentLocationWeather = async (latitude, longitude) => {
  let response = await fetch(`${config.api.endpoints.current}?key=${config.api.key}&lat=${latitude}&lon=${longitude}`);
  let data = await response.json();
  return data.data[0];

}

/**
 *
 * @param latitude
 * @param longitude
 * @param days
 * @returns {Promise<any>}
 */
const getCurrentLocationForecast = async (latitude, longitude, days) => {
  // todo: manager errors for input type
  let response = await fetch(`${config.api.endpoints.forecast}?key=${config.api.key}&lat=${latitude}&lon=${longitude}${(days !== undefined ? '&days=' + days : '')}`);
  let data = await response.json();
  return data.data;
}

export {
  getCurrentLocationForecast, getCurrentLocationWeather
}
