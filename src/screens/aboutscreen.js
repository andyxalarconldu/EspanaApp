import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Acerca de</Text>
      <Text style={styles.sub}>Qu</Text>

      <View style={styles.card}>
        <Image source={require('../../assets/Andy.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Andy Alarcon</Text>
          <Text style={styles.desc}>Estudiante de sdecimo semestre. Desarrollo móvil.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/jugador2.jpg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Juan Martín León</Text>
          <Text style={styles.desc}>Estudiante de séptimo semestre. Lógica de datos.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f9f9f9' },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  sub: { fontSize: 13, color: '#666', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  img: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  info: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  desc: { color: '#555', fontSize: 12, marginTop: 4 }
});