import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    // BLOQUE 1: Contenedor con desplazamiento vertical (ScrollView)
    <ScrollView style={styles.container}>
      
      {/* Encabezado con el nombre del equipo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selección Española de Fútbol</Text>
      </View>

      <View style={styles.content}>
        {/* Imagen del escudo oficial */}
        <Image source={require('../../assets/espana_logo.jpeg')} style={styles.escudo} />

        {/* BLOQUE 2: Datos básicos requeridos del equipo */}
        <View style={styles.card}>
          <Text style={styles.label}>🌐 Confederación: FIFA 2026</Text>
          <Text style={styles.label}>👔 Entrenador: LUIS DE A FUENTE</Text>
          <Text style={styles.label}>🏟️ Estadio de la Gran Final: Estadio Nueva York Nueva Jersey (MetLife Stadium)</Text>
        </View>

        {/* BLOQUE 3: Botón interactivo que navega a la pantalla de Jugadores */}
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Jugadores')}>
          <Text style={styles.btnTxt}>Ver Jugadores ➔</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// BLOQUE 4: Estilos visuales de la pantalla Home
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: { backgroundColor: '#AA151B', paddingVertical: 25, alignItems: 'center', borderBottomWidth: 5, borderBottomColor: '#F1BF00' },
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  content: { padding: 20, alignItems: 'center' },
  escudo: { width: 120, height: 120, borderRadius: 60, marginBottom: 20, borderWidth: 3, borderColor: '#AA151B' },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, width: '100%', elevation: 3, borderLeftWidth: 6, borderLeftColor: '#F1BF00', marginBottom: 20 },
  label: { fontSize: 15, marginBottom: 10, fontWeight: '700', color: '#333333' },
  btn: { backgroundColor: '#AA151B', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  btnTxt: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});