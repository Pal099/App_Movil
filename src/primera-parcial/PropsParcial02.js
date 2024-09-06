import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Utilizamos acá los parámetros recibidos
  const { inputValue, semestre } = route.params;

  return (
    <View>
      {/* Mostramos el nombre y el semestre */}
      <Text style={styles.text}>nombre: {inputValue} - Semestre: {semestre ? '8' : '8'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default PropsParcial02;
