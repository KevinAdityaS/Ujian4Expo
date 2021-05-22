import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
        {
          (this.props.dataRegis.isLogin ? <TouchableOpacity style={styles.button}><Text style={styles.text}>Logout</Text></TouchableOpacity>
          : 
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.text}>Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Register")}}><Text style={styles.text}>Register</Text></TouchableOpacity>
          </View>
          )
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  button:{
      padding:10,
  },
  text:{
      textAlign:'center',
      borderWidth:5,
  }
});