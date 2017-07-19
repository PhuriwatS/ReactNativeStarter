import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Style from './style.js'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { testobj: "testval" }
  }

  render() {
    return (
      <View style={Style.flexone}>

      </View>
    )
  }

}

export default Home