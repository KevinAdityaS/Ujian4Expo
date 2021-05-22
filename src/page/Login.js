import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

class Login extends Component {

  constructor(props){
    super(props)
  }

  handleLogin(){

    axios.get(`http://192.168.0.106/`)

  }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
