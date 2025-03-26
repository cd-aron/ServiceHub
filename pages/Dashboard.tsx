import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../components/NavBar';


const Dashboard = () => {

  
  return (

    
     <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View>
            <Text style={styles.greet}>Hello John Doe</Text>
            <Text style={styles.email}>johndoe123@gmail.com</Text>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <FontAwesomeIcon icon={faLocation} size={20} />
              <Text style={styles.location}>Current Location</Text>
            </View>
          </View>
          <View>
            <FontAwesomeIcon icon={faBell} size={25} />
          </View>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput placeholder='Search...' style={styles.searchBar} placeholderTextColor="black" />
          <FontAwesomeIcon icon={faSearch} size={22} style={styles.searchIcon} />
        </View>

        <View style={styles.psContainer}>
          <Text style={styles.psHeader}>Popular Services</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
            <View>
              <Text style={styles.psImg}></Text>
              <Text style={styles.psText}>Tutor</Text>
            </View>
            <View>
              <Text style={styles.psImg}></Text>
              <Text style={styles.psText}>Trainer</Text>
            </View>
            <View>
              <Text style={styles.psImg}></Text>
              <Text style={styles.psText}>Helper</Text>
            </View>
          </View>
        </View>

        <View style={styles.tpContainer}>
          <Text style={styles.tpHeader}>Top Providers</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
            <View style={{ marginHorizontal: 10, overflow: 'hidden' }}>
              <Text style={styles.tpImg}></Text>

              <TouchableOpacity style={styles.viewBtn}>
                <Text>View Details</Text>
              </TouchableOpacity>

            </View>
            <View>
              <Text style={styles.tpImg}></Text>
              <TouchableOpacity style={styles.viewBtn}>
                <Text>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
         <NavBar/>
      </View>

      </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 17,
  },
  greet: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  email: {
    color: 'blue',
    fontSize: 13,
  },
  location: {
    color: 'black',
    marginHorizontal: 5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
    height: '10%',
    marginHorizontal: 'auto',
  },
  searchBar: {
    borderWidth: 1,
    paddingLeft: 40,
    flex: 1,
    color: 'black',
    borderRadius: 7,
    paddingHorizontal: 20,
  },
  searchIcon: {
    position: 'absolute',
    left: 13,
  },
  psContainer: {
    marginVertical: 10,
  },
  psHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  psImg: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    borderWidth: 1,
    borderRadius: 100,
  },
  psText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  tpContainer: {},
  tpHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  tpImg: {
    backgroundColor: 'black',
    height: 220,
    width: 190,
    borderWidth: 1,
    borderRadius: 5,
  },
  tpText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  viewBtn: {
    backgroundColor: 'green',
    height: 40,
    width: 100,
    padding: 10,
    marginHorizontal: 'auto',
    marginVertical: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'green',
  },
 
});

export default Dashboard;