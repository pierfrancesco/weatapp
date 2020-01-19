import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App';
import config from '../config'

const render = (rootElementId = config['root-element']) => {
  let elementRoot = document.getElementById(rootElementId);
  // TODO: check if rootElement is present before render

  ReactDOM.render(
    <App/>,
    elementRoot
  );
}

export {
  render
}
