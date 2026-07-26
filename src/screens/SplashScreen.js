import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  // BLOQUE 1: Efecto de tiempo (Temporizador)
  // Se ejecuta al cargar la pantalla. Espera 4 segundos y usa .replace para saltar al Home sin permitir volver atrás.
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 4000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  // BLOQUE 2: Interfaz visual (Logo, título, indicador de carga y frase)
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/espana_logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>SELECCIÓN ESPAÑOLA</Text>
      <ActivityIndicator size="large" color="#AA151B" />
      <Text style={styles.txt}>¡Orgullo de Campeones!</Text>
    </View>
  );
}

// BLOQUE 3: Estilos visuales con StyleSheet
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1BF00', alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 140, height: 140, borderRadius: 70, borderWidth: 3, borderColor: '#AA151B', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#AA151B', marginBottom: 20 },
  txt: { fontSize: 14, fontStyle: 'italic', color: '#333', marginTop: 15 }
});