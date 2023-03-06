// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import SignUP from './signup';
import SignIn from './signin';
import LogIn from './logIn';

// export default function App() {
//   return (
//     <View >
//     {/* <SignUP/> */}
//     {/* <LogIn/> */}
//     <SignIn/>
//     </View>
//   );
// }

// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={SignIn} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="logIn" component={LogIn} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="signUp" component={SignUP} 
          options={{ headerShown: false }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;