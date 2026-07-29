import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa tus pantallas existentes
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import AboutScreen from './src/screens/aboutscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home Espana" component={HomeScreen} />
        <Tab.Screen name="Jugadores" component={PlayersScreen} />
        <Tab.Screen name="Acer de" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}