const getLocation = () => new Promise((resolve, reject) => {
  if (navigator.geolocation) return navigator.geolocation.getCurrentPosition(resolve);
  return reject();
});

export {
  getLocation
}
