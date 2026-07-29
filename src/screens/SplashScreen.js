import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/espana_logo.jpeg')} style={styles.img} />
      <Text style={styles.title}>Bienvenido</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#002B49', justifyContent: 'center', alignItems: 'center' },
  img: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' }
});