import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorSimples() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.contadorContainer}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <Text style={styles.mensagem}>
        {contador === 0 ? 'Contador reiniciado!' : ''}
      </Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#f44336' }]} onPress={diminuir}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#00BCD4' }]} onPress={resetar}>
          <Text style={styles.botaoTexto}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#4CAF50' }]} onPress={aumentar}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>Aprenda React Native com Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  contadorContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contador: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  mensagem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    color: '#888',
  },
});
