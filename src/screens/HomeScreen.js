import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    // BLOQUE 1: Contenedor con desplazamiento (ScrollView)
    <ScrollView style={styles.container}>
      
      {/* BLOQUE 2: Cabecera visual fija con colores representativos */}
      <View style={styles.banner}>
        <Text style={styles.bannerTxt}>⚽ ESPAÑA 🇪🇸</Text>
      </View>
     
      {/* BLOQUE 3: Contenido principal, tarjeta de información y botón de navegación */}
      <View style={styles.content}>
        <Text style={styles.title}>Furia Roja</Text>
       
        <View style={styles.card}>
          <Text style={styles.label}>🏆 Título: Campeones de Europa</Text>
          <Text style={styles.label}>👔 Estilo: Tiki-Taka</Text>
        </View>

        {/* Botón táctil que usa navigation.navigate para viajar a la pantalla 'Jugadores' */}
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Jugadores')}>
          <Text style={styles.btnTxt}>Ver Jugadores ➔</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// BLOQUE 4: Estilos de la pantalla
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  banner: { height: 140, backgroundColor: '#AA151B', justifyContent: 'center', alignItems: 'center' },
  bannerTxt: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#AA151B', textAlign: 'center', marginBottom: 15 },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, borderLeftWidth: 5, borderLeftColor: '#F1BF00', elevation: 2 },
  label: { fontSize: 14, marginBottom: 6, fontWeight: '600', color: '#333' },
  btn: { backgroundColor: '#AA151B', padding: 14, borderRadius: 8, marginTop: 25, alignItems: 'center' },
  btnTxt: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});