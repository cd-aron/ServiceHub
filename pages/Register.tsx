import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker'


const Register = () => {
    
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {label: 'Male', value:'male'},
        {label:'Female', value:'female'}
    ])

    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate('LogIn')
    }
  return (
    <View style={styles.container}>
       <View style={styles.header}>
           <Text style={styles.heading}>Create account</Text>

           <View style={{flexDirection:'row'}}>
            <Text style={styles.hText}>Already have and account?</Text>
            <TouchableOpacity onPress={handleLogin}><Text style={{color:'black'}}>Login</Text></TouchableOpacity> 
           </View>
       </View>

 
       <View style={styles.formBody}>
            <View style={styles.nameContainer}>
                <View style={styles.nameCard}>
                    <Text style={{color:'black'}}>First Name</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
                <View  style={styles.nameCard}>
                    <Text style={{color:'black'}}>Last Name</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
            </View>   

            <View style={styles.genderContainer}>

             <View style={styles.genderCard}>   
                <Text style={{color:'black'}}>Gender</Text>
                
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    
                    style={styles.dropDown}
                />

               </View> 
            </View>   


         <View style={styles.dobContainer}>
           <View style={styles.dobCard}>
                <Text style={{color:'black'}}>Date of Birth</Text>
                <TextInput style={styles.dobInput}/>
            </View> 
         </View>     


         <View style={styles.nameContainer}>
                <View style={styles.nameCard}>
                    <Text style={{color:'black'}}>Phone Number</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
                <View  style={styles.nameCard}>
                    <Text style={{color:'black'}}>Email</Text>
                    <TextInput style={styles.nameInput}/>
                </View>
            </View>  
         
         <View style={styles.pssdContainer}>
           <View style={styles.pssdCard}>
                <Text style={{color:'black'}}>Set Password</Text>
                <TextInput style={styles.pssdInput}/>
            </View> 
         </View> 

         <View style={styles.locContainer}>
           <View style={styles.locCard}>
                <Text style={{color:'black'}}>Location</Text>
                <TextInput style={styles.locInput}/>
            </View> 
         </View> 
         
        <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>

       </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#3674B5',
        height:'20%',
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10
    },
    hText:{
        fontSize:13,
        color:'#fff',
    },
    
    formBody:{

    },

    nameContainer:{
        flexDirection:'row',
        width:'100%',
        padding:20
    },
    nameCard:{
     marginHorizontal:10
    },
    nameInput:{
       borderWidth:0.5,
       borderColor:'grey',
       width:140,
       borderRadius:7,
       marginTop:5,
       color:'black'
    },
     
    genderContainer:{
        width:'100%',
    },

    genderCard:{
        margin:'auto'
    },
    dropDown:{
        width:'83%',
        marginTop:5,
        borderColor:'grey',
    },

    dobContainer: {
        marginTop:15,
      },

    dobCard:{
        margin:'auto'
    },
    dobInput:{
        borderWidth:0.5,
        borderColor:'grey',
        width:294,
        borderRadius:7,
        marginTop:5,
        color:'black'
    },

    pssdContainer: {
      },

    pssdCard:{
        margin:'auto'
    },
    pssdInput:{
        borderWidth:0.5,
        borderColor:'grey',
        width:294,
        borderRadius:7,
        marginTop:5,
        color:'black'
    },


    locContainer: {
        marginTop:5,
      },

    locCard:{
        margin:'auto'
    },
    locInput:{
        borderWidth:0.5,
        borderColor:'grey',
        width:294,
        borderRadius:7,
        marginTop:5,
        color:'black'
    },

    btn:{
        backgroundColor:'blue',
        width:'60%',
        margin:'auto',
        justifyContent:'center',
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