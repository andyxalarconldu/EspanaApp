import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  // BLOQUE 1: Temporizador automático de 3 segundos para pasar al Home
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    // BLOQUE 2: Estructura visual con los colores y textos oficiales
    <View style={styles.container}>
      <Image source={require('../../assets/espana_logo.jpeg')} style={styles.logo} />
      <Text style={styles.text}>España - La Roja</Text>
    </View>
  );
}

// BLOQUE 3: Estilos visuales
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1BF00', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 150, height: 150, borderRadius: 75, borderWidth: 4, borderColor: '#AA151B', marginBottom: 20 },
  text: { fontSize: 20, fontWeight: 'bold', color: '#AA151B' }
});