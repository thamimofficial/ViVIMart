/* eslint-disable prettier/prettier */
import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <>
      <StatusBar backgroundColor={'blue'} />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </>
  );
}
