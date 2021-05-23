import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import axios from 'axios'
import { UserAction } from '../redux/Action'

class Register extends Component {
  
  constructor(props){
    super(props)
  }

  handleInputData(){

    axios.post("http://192.168.0.106:4646/user/addUser/", this.props.dataRegister)
    .then((response) => {
      alert(JSON.stringify(response.data));
      this.props.navigation.navigate("Home")
    })
    .catch((err) => {
      console.log("There is an error with : " + err)
    })
    
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>REGISTER</Card.Title>
          <Card.Divider/>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your name here..."
            onChangeText={(value)=>{this.props.UserAction("name",value)}}
          />
          <Card.Divider/>

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your email here..."
            onChangeText={(value)=>{this.props.UserAction("email",value)}}
          />
          <Card.Divider/>

          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your phone number here..."
            onChangeText={(value)=>{this.props.UserAction("phone",value)}}
          />
          <Card.Divider/>
          
          <Text>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your address here..."
            onChangeText={(value)=>{this.props.UserAction("address",value)}}
          />
          <Card.Divider/>

          <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  dataRegister : state.UserReducer
})

const mapDispatchToProps = {
  UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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