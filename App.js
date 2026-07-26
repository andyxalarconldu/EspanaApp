import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// BLOQUE 1: Importación de las pantallas de la aplicación
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';

// BLOQUE 2: Creación del Stack Navigator para gestionar el flujo de navegación
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* BLOQUE 3: Configuración de rutas (Arranca en Splash y oculta la barra superior por defecto) */}
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jugadores" component={PlayersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}