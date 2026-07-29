import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa tus pantallas
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import AboutScreen from './src/screens/aboutscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula el Splash Screen por 2 segundos antes de mostrar la app con el menú
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Jugadores" component={PlayersScreen} />
        <Tab.Screen name="Acerca de" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}