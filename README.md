# WeatApp

This project is about a Weather Widget that takes weather's info after asking user geo position permission.
---

**Author**: pierfrancisco89@hotmail.it

### Tech Stack
- ReactJS
- Webpack
- ES6
- CSS

### Project structure

The two main folders of the project are `src` and `build`. 

- `src`
  - `components`: in this application, if a React component contains other component as well 
  is considered a real "component" and is first class citizen of this folder.
  - `controolers`: all the functionalities that are done (take api, do other stuff) which 
  are also used from the components are placed here.
  - `elements`: all the functional components that don't have child are placed inside this folder
  - `public`: for now it only contains the global css which is eventually importend inside the react app
  
- `build`: it contains the ouput of the `npm run build` command which packs all the application
inside a single script that is imported than inside the index.html file.

### Where to start?

The main intro file is `src/index.js`. It wraps and expose the method for rendering the whole application.
Plus it include some polyfill that maybe usefull in some old browser env.

The export in `src/index` is strictly connected with `webpack.config.js`. 

Then there's the `App.js` file which is the entry point for the actual react app.

This approach has been preferred rather than a pure CRA app due to the fact that in this way 
the whole widget could be integrated, triggered and modified using javascript module best practices.

### How to play

- `npm i` 
- `npm run start` : live
- `npm run build` : build files inside `build` folder

### Note

For this demo two sets of api have been used:
- WheaterBit for weather info
- Google Map API for the map: because now Billing method are required for use the free tier
of api it may now works properly

### TODO:

- display error 
  - if user deny location permission
  - if user already denied location permission
  - if timeout happens

- write errors for bad api response
- full responsive design
- full set of icon for mode CODE weather conditions
- jest test & snapshot
- storybook
