import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MessageCard from '../components/MessageCard';

const Message = () => {
  return (
    <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
       
       <View style={styles.header}>
          <Text style={{fontSize:20, fontWeight:'bold',color:'black'}}>Inbox</Text>
       </View>

           
       <View style={styles.searchBarContainer}>
                    <TextInput placeholder='Find Chat or User' style={styles.searchBar} placeholderTextColor="black" />
                    <FontAwesomeIcon icon={faSearch} size={22} style={styles.searchIcon} />
        </View>

        <View style={styles.body}>
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>           
        </View>

      <View style={styles.footer}>
        <NavBar/>
      </View>

      </ScrollView>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

      scrollContainer: {
        flexGrow: 1,
        paddingBottom: 80,
      },
    
    header:{
       height:'10%',
       width:'100%',
       padding:20
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: '6%',
        marginHorizontal: 'auto',

      },
      searchBar: {
        borderWidth: 1,
        paddingLeft: 40,
        flex: 1,
        color: 'black',
        borderRadius: 7,
      },
      searchIcon: {
        position: 'absolute',
        left: 13,
      },

    body:{
        marginVertical:17
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'green',
      },
})