import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component {
  
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(JSON.stringify(this.props))
    }

    getData = () =>{
        axios.get("")
    }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>WELCOME</Card.Title>
          <Card.Divider/>
          {
            (this.props.dataRegister.isLogin ? <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.text}>Logout</Text></TouchableOpacity>
            : 
            <View>
              <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.text}>Login</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Register")}}><Text style={styles.text}>Register</Text></TouchableOpacity>
            </View>
            )
          }
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  dataRegister : state.UserReducer
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button:{
      padding:10,
  },
  text:{
    textAlign:'center',
    borderWidth:2.5,
    padding : 5
  }

});