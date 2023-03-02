import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUP from './signup';
import SignIn from './signin';

export default function App() {
  return (
    <View >
    {/* <SignUP/> */}
    <SignIn/>
    </View>
  );
}

