import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'

class MainMenu extends Component {
  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>MAIN MENU</Card.Title>
          <Card.Divider/>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("AddReport")}}><Text style={styles.text}>Report</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("HistoryReport")}}><Text style={styles.text}>Report History</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Map")}}><Text style={styles.text}>Location</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Home")}}><Text style={styles.text}>Logout</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("AddReport")}}><Text style={styles.text}>EMERGENCY!!!</Text></TouchableOpacity>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

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