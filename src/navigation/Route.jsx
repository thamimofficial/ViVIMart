import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home'; // Adjust the path as needed
import ProductCard from './src/views/ProductCard'; // Adjust the path as needed

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="ProductCard">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ProductCard" component={ProductCard} options={{ headerShown: false }} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default Route;
