import React, { Component } from 'react';
///IMport the route from the react-router-dom'

import { routes } from '../routes';

class App extends Component {
  //Use the exact keyword, means you have to go to the exact route.//Can also do the same thing with a <switch/> component.
  //Make sure to the use two tags so there is content for the link.
  //The exact keyword is used to distinguish between multiple subroutes or routes.  
  //Same syntadx for a route for a route parameter. 
  render() {
    return routes;
  }
}

export default App;
