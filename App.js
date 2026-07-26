import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// BLOQUE 1: Importación de pantallas
// Importa los archivos individuales que actúan como vistas de la aplicación.
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';

// BLOQUE 2: Creación del navegador por pila (Stack)
const Stack = createNativeStackNavigator();

// BLOQUE 3: Componente principal de la app y contenedor de rutas
export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName define qué pantalla arranca primero y headerShown oculta la barra superior */}
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jugadores" component={PlayersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}