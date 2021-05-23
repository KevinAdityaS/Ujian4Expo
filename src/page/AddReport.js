import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import axios from 'axios'
import { ReportAction } from '../redux/Action'

class AddReport extends Component {
  
  constructor(props){
    super(props)
  }

  handleInputReport(){

    axios.post("http://192.168.0.106:4646/report/addReport/", this.props.dataReport)
    .then((response) => {
      alert(JSON.stringify(response.data));
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
          <Card.Title>INSERT YOUR REPORT</Card.Title>
          <Card.Divider/>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your name here..."
            onChangeText={(value)=>{this.props.ReportAction("name",value)}}
          />
          <Card.Divider/>

          <Text>Incident</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your incident here..."
            onChangeText={(value)=>{this.props.ReportAction("incident",value)}}
          />
          <Card.Divider/>

          <Text>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your address here..."
            onChangeText={(value)=>{this.props.ReportAction("address",value)}}
          />
          <Card.Divider/>
          
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your description here..."
            onChangeText={(value)=>{this.props.ReportAction("description",value)}}
          />
          <Card.Divider/>

          <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputReport()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  dataReport : state.ReportReducer
})

const mapDispatchToProps = {
  ReportAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReport)

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