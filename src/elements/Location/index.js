import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

/**
 *
 * @param cityName
 * @returns {*}
 * @constructor
 */
const Location = ({cityName = "TBD"}) => {
  return <div className={"locationComponent"}>
    <div className={"pinComponent"}/>
    <div className={'locationText'}>
      {cityName}
    </div>
  </div>
}

Location.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export default Location;
