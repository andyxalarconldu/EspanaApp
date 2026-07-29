import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Hola!</Text>
      <Text style={styles.subtitle}>Torneo de selecciones 2026</Text>

      <View style={styles.card}>
        <Image source={require('../../assets/argentina.jpg')} style={styles.flag} />
        <Text style={styles.badge}>SEGUNDO LUGAR</Text>
        <Text style={styles.title}>ARGENTINA</Text>
        <View style={styles.divider} />
        <Text style={styles.row}>Director técnico: <Text style={styles.bold}>L. Scaloni</Text></Text>
        <Text style={styles.row}>Capitán: <Text style={styles.bold}>L. Messi</Text></Text>
        <Text style={styles.row}>Final: <Text style={styles.bold}>1 - 2</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f9f9f9' },
  welcome: { fontSize: 22, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#777', marginBottom: 25, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center', elevation: 3, borderWidth: 1, borderColor: '#eee' },
  flag: { width: 60, height: 40, marginBottom: 10, resizeMode: 'contain' },
  badge: { fontSize: 11, color: '#777', fontWeight: 'bold', marginBottom: 5 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 15 },
  divider: { width: '100%', height: 1, backgroundColor: '#eee', marginBottom: 15 },
  row: { fontSize: 15, color: '#444', marginBottom: 8, width: '100%' },
  bold: { fontWeight: 'bold', color: '#000' }
});