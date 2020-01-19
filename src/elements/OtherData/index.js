import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

const OtherData = ({feelLikeTemp = 100, humidity = 100}) => {
  return <div className={"otherDataComponent"}>
    <div>Feels like: {feelLikeTemp}°</div>
    <div>Humidity: {humidity}%</div>
  </div>
}

OtherData.propTypes = {
  feelLikeTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired
};

export default OtherData;
