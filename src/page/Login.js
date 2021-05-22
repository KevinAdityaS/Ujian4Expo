import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import axios from 'axios'
import { UserAction } from '../redux/Action'

class Login extends Component {

  constructor(props){
    super(props)
  }

  handleLogin(){

    axios.get(`http://192.168.0.106:4646/user/name/${this.props.dataName}`)
    .then((response) => {
      alert("Welcome, " + response.data.name)
      this.props.UserAction("idUser", response.data.idUser)
      this.props.UserAction("name", response.data.name)
      this.props.UserAction("email", response.data.email)
      this.props.UserAction("phone", response.data.phone)
      this.props.UserAction("address", response.data.address)
      this.props.UserAction("isLogin", true)

      this.props.navigation.navigate("MainMenu")
    })
    .catch((err) => {
      console.log("There is an error with : " + err)
    })

  }

  render() {
    
    return (
      <View>
        <Card>
          <Text> Please input your name to login </Text> 
          <TextInput
            style={styles.input}
            placeholder="Input your name here..."
            onChangeText={(value)=>{this.props.UserAction("name",value)}}
          />                
          <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>    
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button:{
      padding:20,
  },
  text:{
    textAlign:'center',
    borderWidth:2.5,
    padding : 5
}
});