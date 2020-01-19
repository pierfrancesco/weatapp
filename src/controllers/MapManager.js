import { loadScript } from './UtilsManager';
import config from '../config';

/**
 *
 * @param mapElementId
 * @param lat
 * @param lng
 */
const initMap = (mapElementId, lat, lng) => {
  loadScript(`${config.map.src}?key=${config.map.key}`).then(res => {
    let position = {lat: lat, lng: lng};
    let map = new google.maps.Map(document.getElementById(mapElementId), {zoom: 15, center: position});
    let marker = new google.maps.Marker({position: position, map: map});
  }).catch(err => {
    // TODO:
    console.log(err);
  });
}

export {
  initMap
}
