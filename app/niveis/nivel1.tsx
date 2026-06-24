import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Nivel1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível 1</Text>
      <Text style={styles.text}>Bem-vindo à primeira página do teste React Native.</Text>
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#444',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007aff',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
