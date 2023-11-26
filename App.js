import React from "react";
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/'
import Form from "./src/components/Form";

// Componente principal do apk. Aqui estou organizando os componentes Title e Form

export default function App() {
  return (
    // Container principal do apk, aplicando estilos definidos em "styles"
    <View style={styles.container}>
      {/* Componente Title que exibe o título do aplicativo */}
      <Title />
      
      {/* Componente Form que permite calcular e exibir o IMC */}
      <Form />
    </View>
  );
}

// Estilos para o componente principal
const styles = StyleSheet.create({
  container: {
    // Flex 1 faz com que o container ocupe toda a altura disponível
    flex: 1,
    // Cor de fundo do container
    backgroundColor: '#e0e5e5',
    // Padding superior de 80 unidades para afastar os componentes do topo
    paddingTop: 80,    
  },
});
