import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

const Profile = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
          
          <View style={styles.hLeftContainer}>
            <Text style={styles.hImg}></Text>
            <Text style={styles.hUsername}>John Doe</Text>
            <Text style={styles.hDes}>Web Developer</Text>
          </View>

          <View style={styles.hRightContainer}>
              <Text style={styles.menu}>.</Text>
              <Text style={styles.menu}>.</Text>
              <Text style={styles.menu}>.</Text>
          </View>
      </View>

      <View style={styles.footer}>
        <NavBar/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },


     header:{
       backgroundColor:'#089000',
       height:'25%',
       flexDirection:'row',
       padding:15
     },

     hLeftContainer:{
     },
     hImg:{
       backgroundColor:'black',
       height:100,
       width:100, 
       borderRadius:100
     },
     hUsername:{
       fontSize:21,
       fontWeight:500,
       marginHorizontal:9,
       marginVertical:2
     },
     hDes:{
       fontSize:12,
       marginHorizontal:9,
       marginVertical:2
     },
     hRightContainer:{
        flexDirection:'row',
        marginLeft:'auto'
     },

     menu:{
       fontSize:27,
       fontWeight:'bold'
     },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'green',
      },

    })

export default Profile