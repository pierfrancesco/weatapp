/**
 *
 * @param dateYYYY_MM_DD
 * @returns {number}
 */
const getWeekDayFromDate = (dateYYYY_MM_DD) => new Date(dateYYYY_MM_DD).getDay()

/**
 *
 * @param weekDayNumber
 * @returns {string}
 */
const getWeekDayNameFromDate = (weekDayNumber) => {
  if (weekDayNumber === 0) return 'Sunday'
  if (weekDayNumber === 1) return 'Monday'
  if (weekDayNumber === 2) return 'Tuesday'
  if (weekDayNumber === 3) return 'Wednesday'
  if (weekDayNumber === 4) return 'Thursday'
  if (weekDayNumber === 5) return 'Friday'
  if (weekDayNumber === 6) return 'Saturday'
  return 'ERROR';
}

const loadScript = (src) => new Promise((resolve, reject) => {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    return resolve();
  };
  script.onerror = () => {
    return reject();
  };
  document.body.appendChild(script);

})

export { getWeekDayFromDate, getWeekDayNameFromDate, loadScript }

