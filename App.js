import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Home from './src/components/Home';
import Login from './src/screen/Login';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const NO_USER = 'NO_USER';

export default function App() {

  const [localId, setLocalId] = useState();

  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem('id');
      id ? setLocalId(id) : setLocalId(NO_USER);
    })();
  }, []);


  return (
    <NavigationContainer>
      {localId && (
        <Stack.Navigator
          initialRouteName={localId === NO_USER ? 'Login' : 'Home'}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      )}
      <StatusBar barStyle='light-content' style='auto' />
    </NavigationContainer>
  );
}
