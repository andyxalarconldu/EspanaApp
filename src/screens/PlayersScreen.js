import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function PlayersScreen() {
  return (
    // BLOQUE 1: Contenedor con scroll para los jugadores
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.head}>Estrellas de La Roja</Text>
       
        {/* BLOQUE 2: Tarjeta del Jugador 1 (Lamine Yamal) */}
        <View style={styles.pCard}>
          <Image source={require('../../assets/jugador1.jpg')} style={styles.pImg} />
          <View style={styles.pInfo}>
            <Text style={styles.pName}>Lamine Yamal</Text>
            <Text style={styles.pPos}>⚽ Delantero - FC Barcelona</Text>
          </View>
        </View>

        {/* BLOQUE 3: Tarjeta del Jugador 2 (Rodri Hernández) */}
        <View style={styles.pCard}>
          <Image source={require('../../assets/jugador2.jpg')} style={styles.pImg} />
          <View style={styles.pInfo}>
            <Text style={styles.pName}>Rodri Hernández</Text>
            <Text style={styles.pPos}>⚽ Mediocampista - Manchester City</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// BLOQUE 4: Estilos visuales de las tarjetas de jugadores
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  content: { padding: 20 },
  head: { fontSize: 22, fontWeight: 'bold', color: '#AA151B', textAlign: 'center', marginBottom: 20 },
  pCard: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 12, marginBottom: 15, overflow: 'hidden', elevation: 3 },
  pImg: { width: 90, height: 90 },
  pInfo: { padding: 12, justifyContent: 'center', borderLeftWidth: 5, borderLeftColor: '#F1BF00', flex: 1 },
  pName: { fontSize: 17, fontWeight: 'bold', color: '#333333' },
  pPos: { fontSize: 13, color: '#666666', marginTop: 4 }
});