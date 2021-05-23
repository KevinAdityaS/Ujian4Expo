import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import axios from 'axios'

class HistoryReport extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }

  componentDidMount(){

    this.handleHistory();

  }

  handleHistory(){

    axios.get(`http://192.168.0.106:4646/report/`)
    .then((response) => {
      let data = response.data
      this.setState({data : data})
    })
    .catch((err) => {
      console.log("There is an error with : " + err)
    })

  }

  renderItem = ({ item }) => (
    <View style = {{borderWidth : 2, borderColor : "blue", marginTop : 5}}>
      <Text style = {styles.title}>❄Name: {item.name}</Text>
      <Text style = {styles.title}>❄Incident: {item.incident}</Text>
      <Text style = {styles.title}>❄Address: {item.address}</Text>
      <Text style = {styles.title}>❄Description: {item.description}</Text>
    </View>
)

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.text}>REPORT HISTORY</Text>
          <FlatList 
            data = {this.state.data}
            renderItem = {this.renderItem}
            keyExtcactor = {item => item.id}
          />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryReport)

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
  },
  container: {
    flex: 1,
    padding : 10,
    marginTop: StatusBar.currentHeight || 0
  }

});