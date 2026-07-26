import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function PlayersScreen() {
  return (
    // BLOQUE 1: Contenedor principal con Scroll para mostrar listados
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.head}>Estrellas</Text>
       
        {/* BLOQUE 2: Tarjeta individual del Jugador 1 (Lamine Yamal) */}
        <View style={styles.pCard}>
          <Image source={require('../../assets/jugador1.jpg')} style={styles.pImg} />
          <View style={styles.pInfo}>
            <Text style={styles.pName}>Lamine Yamal</Text>
            <Text style={styles.pPos}>Delantero - FC Barcelona</Text>
          </View>
        </View>

        {/* BLOQUE 3: Tarjeta individual del Jugador 2 (Rodri Hernández) */}
        <View style={styles.pCard}>
          <Image source={require('../../assets/jugador2.jpg')} style={styles.pImg} />
          <View style={styles.pInfo}>
            <Text style={styles.pName}>Rodri Hernández</Text>
            <Text style={styles.pPos}>Mediocampista - Man City</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// BLOQUE 4: Estilos personalizados para las tarjetas de los jugadores
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  content: { padding: 20 },
  head: { fontSize: 22, fontWeight: 'bold', color: '#AA151B', textAlign: 'center', marginBottom: 15 },
  pCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, marginBottom: 12, overflow: 'hidden', elevation: 2 },
  pImg: { width: 90, height: 90 },
  pInfo: { padding: 10, justifyContent: 'center', borderLeftWidth: 4, borderLeftColor: '#F1BF00', flex: 1 },
  pName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  pPos: { fontSize: 12, color: '#666', marginTop: 3 }
});