import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SSOLoginScreen from './screens/Auth/SSOLogin';
import HomeScreen from './screens/home/Home';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
   <NavigationContainer initialRouteName='ssoLogin'>
    <Stack.Navigator>
      <Stack.Screen name="ssoLogin" component={SSOLoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
