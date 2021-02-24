import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Home from './src/components/Home';
import Login from './src/screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {

  const [localId, setLocalId] = useState('');

  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem("id")
      setLocalId(id);
    })();
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={localId ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <StatusBar barStyle='light-content' style="auto" />

    </NavigationContainer>

  );
}
