import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LogInScreen from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Profile from './pages/Profile'
import Register from './pages/Register'

const Stack =  createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name='LogIn' component={LogInScreen} options={{headerShown:false}}/>
           <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
           <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
           <Stack.Screen name='Message' component={Message} options={{headerShown:false}}/>
           <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App