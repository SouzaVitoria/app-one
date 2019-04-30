//Importando Componentes
import React from 'react'; // = var React = require('react');
import { Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'; // = var { Text, View, Button, SafeAreaView } = require('react-native');

//Formatações
const Estilos = {
  estiloView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5ff'
  },
  estiloButton: {
    shadowColor: "#1d2be5",
    shadowOffset: { widht: 0, height: 4 },
    shadowOpacity: 0.5,
    padding: 30,
    borderColor: '#1d2be5',
    borderWidth: 0.5,
    borderOpacity: 0.1,
    borderRadius: 100,
    alignItems: 'flex-end',
  }
}

export default (props) => { //Default = app
  const { estiloView, estiloButton } = Estilos; //Simplificar o style
  return (
    //Deixar conteudo correto no layout do iphone - CONTAINER
    <SafeAreaView style={estiloView}>
      <TouchableOpacity
        style={estiloButton}
         onPress={() => {
          props.nav.push({ id: 'homeLista' }) //Recupera navigator que veio do props nav
        }}
      >
        <Image source={require("../imgs/login.png")} style={{width:100, height:100, alignItems:'center'}}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
