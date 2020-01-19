import React, { useEffect } from 'react';
import './index.css';
import { initMap } from '../../controllers/MapManager'
import PropTypes from 'prop-types'

/**
 *
 * @param cityName
 * @returns {*}
 * @constructor
 */
const Map = ({lat, lng}) => {
  const mapId = 'myMapComponentId';

  useEffect(() => {
    setTimeout(() => {
      initMap(mapId, lat, lng);
    }, 1000)

  }, []);

  return <>
    <div id={mapId} className={"mapComponent"}/>
  </>
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Map;
