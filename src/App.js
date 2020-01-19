import React, { Component } from 'react';
import './public/css/global.css';
import { getLocation } from './controllers/GeolocationManager';
import Today from './components/Today';
import Divider from './elements/Divider';
import Week from './components/Week';
import Map from './elements/Map';
import Loader from './elements/Loader';
import { getCurrentLocationForecast, getCurrentLocationWeather } from './controllers/ApiManager'
import { getWeekDayFromDate, getWeekDayNameFromDate } from './controllers/UtilsManager'

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentLocationInfo: null,
      currentLocationForecast: null,
      lat: null,
      lng: null,
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
  }

  async componentDidMount () {
    try {
      // ask for geo loc permissions
      let {coords} = await getLocation();
      // exit condition first
      if (coords === undefined || coords.latitude === undefined || coords.longitude === undefined) return;

      let currentLocationInfo = await getCurrentLocationWeather(coords.latitude, coords.longitude);
      let currentLocationForecast = await getCurrentLocationForecast(coords.latitude, coords.longitude, 7);

      // exit condition first (could be splitted if one info is available or not and decide to show it)
      if (currentLocationInfo === undefined || currentLocationForecast === undefined) return;

      // set info from api inside app state (for this demo classical react data flow is enough)
      this.setState({
        ...this.state,
        currentLocationInfo: currentLocationInfo,
        currentLocationForecast: currentLocationForecast,
        lat: coords.latitude,
        lng: coords.longitude,
      })

    } catch (e) {
      // TODO: manage errors
    }
  }

  render () {
    let elementToRender = <Loader/>

    if (this.state.currentLocationInfo === null) return elementToRender;
    if (this.state.currentLocationForecast === null) return elementToRender;

    // extract info for Today component
    let {city_name, temp, app_temp, rh, weather} = this.state.currentLocationInfo;

    // extract info for Week component
    let weekDaysForecastArray = this.state.currentLocationForecast.map(dailyForecast => {
      let objectToReturn = {};
      objectToReturn.dayNameShort = getWeekDayNameFromDate(getWeekDayFromDate(dailyForecast.valid_date)).slice(0, 3);
      objectToReturn.dayNumber = dailyForecast.valid_date.slice(8, 10);
      objectToReturn.maxTemp = dailyForecast.high_temp;
      objectToReturn.minTemp = dailyForecast.low_temp;
      objectToReturn.weatherConditionsCode = dailyForecast.weather.code;
      return objectToReturn;
    });

    elementToRender = <div className={"flip-card-component-inner" + (this.state.isFlipped ? ' clicked' : '')}
                           onClick={(e) => this.handleClick(e)}>
      <div className={"flip-card-component-front"}>
        <Today feelLikeTemp={app_temp} humidity={rh} temperature={temp} weatherConditionsCode={Number(weather.code)}
               cityName={city_name}/>
        <Divider/>
        <Week nextSevenDays={weekDaysForecastArray}/>
      </div>
      <div className={"flip-card-component-back"}>
        <Map lng={this.state.lng} lat={this.state.lat}/>
      </div>
    </div>
    return elementToRender;
  }
}

export default App;
