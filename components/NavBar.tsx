import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage, faUser  } from '@fortawesome/free-regular-svg-icons';
import {faCartShopping, faHouse, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

  const navigation = useNavigation()

    const handleDashboard = () => {
      navigation.navigate('Dashboard')
    }
  
    const handleMessage = () => {
        navigation.navigate('Message')
    }

    const handleProfile = () => {
       navigation.navigate('Profile')
    }

  return (
    <View style={styles.navBarContainer}>
             <TouchableOpacity onPress={handleDashboard}><FontAwesomeIcon icon={faHouse} size={20} /></TouchableOpacity>
            <TouchableOpacity onPress={handleMessage}><FontAwesomeIcon icon={faMessage} size={20} /></TouchableOpacity>
            <FontAwesomeIcon icon={faPlus} size={20} />
            <FontAwesomeIcon icon={faCartShopping} size={20} />
            <TouchableOpacity onPress={handleProfile}><FontAwesomeIcon icon={faUser} size={20} /></TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EEEEEE',
    height: '100%',
    paddingVertical: 17,
  },
})