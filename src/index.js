import 'babel-polyfill';
import 'custom-event-polyfill';
import { render } from './controllers/InitManager';

const packageJson = require("../package.json");
const version = packageJson.version;

//////////////////// EXPORT TO WORLD ////////////////////
const WeatApp = new function() {
  this.version = version;
  this.render = render;
};

render();

export default WeatApp;
/////////////////////////////////////////////////////////
