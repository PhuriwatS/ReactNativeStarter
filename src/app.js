import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { AppRegistry } from 'react-native'
import Home from './home.js'

const App = () => {

  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Home"/>
      </Scene>
    </Router>
  )

};

AppRegistry.registerComponent('mockreddit', () => App)