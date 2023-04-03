import SignUP from './signup';
import SignIn from './signin';
import LogIn from './logIn';
import NewPassword from './NewPassword';
import TermsScreen from './T&CScreen';
import ProfileBio1 from './ProfileBio1';
import ProfileBio2 from './ProfileBio2';
import ProfileBio2Blur from './ProfileBio2Blur';
import ImagePickerScreen from './ImagePickerScreen';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileBio2Blur">
      <Stack.Screen name="Home" component={SignIn} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="logIn" component={LogIn} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="signUp" component={SignUP} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="newPassword" component={NewPassword} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="T&CScreen" component={TermsScreen} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="ProfileBio1" component={ProfileBio1} 
          options={{ headerShown: false }}
         />
          <Stack.Screen name="ProfileBio2" component={ProfileBio2} 
          options={{ headerShown: false }}
         />
          <Stack.Screen name="ProfileBio2Blur" component={ProfileBio2Blur} 
          options={{ headerShown: false }}
         />
         <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} 
          options={{ headerShown: false }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;