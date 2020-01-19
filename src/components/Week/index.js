import React from 'react';
import PropTypes from 'prop-types';
import WeekDay from '../WeekDay';
import './index.css';

const Week = ({nextSevenDays = []}) => {
  // TODO: in case of no day return fallback error
  return <div className={"weekComponent"}>
    {nextSevenDays.slice(0, 7).map((weathDayInfo, index) =>
      <WeekDay
        key={"key-" + weathDayInfo.dayNameShort}
        dayNameShort={weathDayInfo.dayNameShort}
        dayNumber={weathDayInfo.dayNumber}
        maxTemp={weathDayInfo.maxTemp}
        minTemp={weathDayInfo.minTemp}
        weatherConditionsCode={weathDayInfo.weatherConditionsCode}
        isFirst={index === 0}
      />
    )}
  </div>
}

Week.propTypes = {
  nextSevenDays: PropTypes.array.isRequired
};

export default Week;
