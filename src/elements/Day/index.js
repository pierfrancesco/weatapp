import React from 'react';
import PropTypes from 'prop-types'
import './index.css';

const Day = ({dayNameShort = "TBD", dayNumber = 1}) => {

  return <div className={"dayComponent"}>{dayNameShort} {dayNumber}</div>
}

Day.propTypes = {
  dayNameShort: PropTypes.string.isRequired,
  dayNumber: PropTypes.string.isRequired
};

export default Day;
