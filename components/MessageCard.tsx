import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessageCard = ({data}) => {
  return (
    <View style={styles.msgCard}>
            
    <View style={styles.mLeft}>
      <Text style={styles.mImg}></Text>
    </View>

    <View style={styles.mMid}>
       <Text style={styles.mUser}>{data.username}</Text>
       <Text style={styles.mMsg}>{data.message}</Text>
    </View>

    <View style={styles.mRight}> 
        <Text style={styles.mTime}>{data.time}</Text>
        <Text style={styles.mTimes}>{data.times}</Text>
    </View>

    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({
    msgCard:{
        overflow:'hidden',
        flexDirection:'row',
        marginVertical:6,
        marginLeft:23,
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
        
         width:150,
         margin:'auto'
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

         width:60,
         marginLeft:'auto'
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