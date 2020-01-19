import { loadScript } from './UtilsManager';
import config from '../config';

/**
 *
 * @param mapElementId
 * @param lat
 * @param lng
 */
const initMap = (mapElementId, lat, lng) => {
  loadScript(`${config.map.src}`).then(res => {
    let map = new ol.Map({
      target: mapElementId,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([lng, lat]),
        zoom: 4
      })
    });
  }).catch(err => {
    // TODO:
    console.log(err);
  });
}

export {
  initMap
}
