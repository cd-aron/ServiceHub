import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Image, Alert} from 'react-native'
import Logo from '../components/loginImage.png'

import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f1f1f1',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:40,
  },
  logo:{
     height:250,
     width:250
  },
  header:{
    fontSize:25,
    width:'100%',
    textAlign:'center',
    marginBottom:10,
    fontWeight:'bold',
    color:'black'
  },
  labels:{
    color:'black',
    width:'100%',
    fontSize:17,
    marginVertical:10,
  },
  inputContainer:{
    backgroundColor:'#7E99A3',
    color:'#fff',
    borderRadius:3,
    width:'100%'
  },
  btn:{
    backgroundColor:'blue',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    paddingVertical:10,
    borderRadius:3,
    marginVertical:10
  },
  btnText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#fff',
  }
})



const LogIn = () => { 

  const navigation = useNavigation()

const handleSubmit = () => {
  Alert.alert("Login Successfull", "You have successfully logged in")
  navigation.navigate('Dashboard')
}

const handleRegister = () => {
   navigation.navigate('Register')
}

  return (
     <View style={styles.container}>

        <Image source={Logo} style={styles.logo}/>

        <Text style={styles.header}>LogIn</Text>
        
        <Text style={styles.labels}>Email</Text>
        <TextInput placeholder="example@gmail.com" style={styles.inputContainer}/>
         
        <Text style={styles.labels}>Password</Text>
        <TextInput placeholder="********" secureTextEntry style={styles.inputContainer}/> 

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleRegister}>
         <Text style={{color:'blue'}}>Register</Text>
        </TouchableOpacity>
     </View>
  )
}

export default LogIn