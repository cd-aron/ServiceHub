import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessageCard = () => {
  return (
    <View style={styles.msgCard}>
            
    <View style={styles.mLeft}>
      <Text style={styles.mImg}></Text>
    </View>

    <View style={styles.mMid}>
       <Text style={styles.mUser}>John Doe</Text>
       <Text style={styles.mMsg}>Greetings from John Doe!</Text>
    </View>

    <View style={styles.mRight}> 
        <Text style={styles.mTime}>5h ago</Text>
        <Text style={styles.mTimes}>1</Text>
    </View>

    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({
    msgCard:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:5,
        borderBottomWidth:0.3,
        borderBottomColor:'grey',
        paddingBottom:8,
     },
     mLeft:{
       
     },
     mImg:{
       backgroundColor:'black',
       height:55,
       width:55,
       borderRadius:100
     },
     mMid:{
 
     },
     mUser:{ 
        color:'black',
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5
     },
     mMsg:{
         color:'black',
         fontSize:13
     },
     mRight:{
    
     },
     mTime:{
        color:'grey',
        fontSize:13,
        marginBottom:5
     },
     mTimes:{
         backgroundColor:'green',
         fontSize:12,
         textAlign:'center',
         height:17,
         width:25,
         borderRadius:7
     },
})