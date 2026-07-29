import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const PlayerRow = ({ name, pos, img }) => (
  <View style={styles.playerCard}>
    <Image source={img} style={styles.playerImg} />
    <View><Text style={styles.pName}>{name}</Text><Text style={styles.pPos}>{pos}</Text></View>
  </View>
);

export default function PlayersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ESPAÑA</Text>
      <Text style={styles.subHeader}>Selección campeona</Text>

      <View style={styles.card}>
        <Text style={styles.txt}>Director técnico: L. de la Fuente</Text>
        <Text style={styles.txt}>Capitán: Á. Morata</Text>
        <Text style={styles.txt}>Final: 2 - 1</Text>
      </View>

      <Text style={styles.sectionTitle}>JUGADORES DESTACADOS</Text>

      <PlayerRow name="Lamine Yamal" pos="Extremo" img={require('../../assets/jugador1.jpg')} />
      <PlayerRow name="Rodri" pos="Volante" img={require('../../assets/jugador2.jpg')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f9f9f9', flexGrow: 1, justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#B91C1C', textAlign: 'center' },
  subHeader: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 15 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#444', marginBottom: 10 },
  playerCard: { backgroundColor: '#fff', padding: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 8, elevation: 1 },
  playerImg: { width: 40, height: 40, borderRadius: 20, marginRight: 15 },
  pName: { fontWeight: 'bold', fontSize: 15 },
  pPos: { fontSize: 13, color: '#666' },
  txt: { fontSize: 14, color: '#444', marginBottom: 4 }
});