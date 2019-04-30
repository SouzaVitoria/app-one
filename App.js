import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import BarraNavegacao from './src/components/barraNavegacao';
import CenaPrincipal from './src/components/cenaPrincipal';
import ListaItens from './src/components/listaItens';
import HomeLista from './src/components/homeLista';

export default class App extends Component { //Default = app
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='#CCC'
        />
        <Navigator
          initialRoute={
            { id: 'cenaPrincipal' }
          }
          renderScene={(route, navigator) => {  //Function callback
            if (route.id === 'cenaPrincipal') {
              return (
                <View style={{ flex: 1 }}>
                  <BarraNavegacao />
                  <CenaPrincipal nav={navigator} />
                </View>
              ); //Renderizar cena - Encaminhando props nav
            }

            if (route.id === 'homeLista') {
              return (
                <View style={{ flex: 1, backgroundColor: '#e8f5ff' }}>
                  <View>
                    <BarraNavegacao voltar nav={navigator} />
                  </View>
                  <ScrollView style={{ flex: 1}}>
                    <ListaItens 
                       ref={ref => { this.listaItens = ref }} 
                       onEdit={(editarItem, idItem) => { this.homeLista.editItem(editarItem, idItem) }}
                       nav={navigator}
                    />
                  </ScrollView>
                  <View style={{ flex: 0.15 }}>
                    <HomeLista 
                       nav={navigator} 
                       onSave={newItem => {this.listaItens.addNewItem(newItem)}}
                       ref={ref => {this.homeLista = ref}}
                    />
                  </View>
                </View>

              ); //Renderizar cena - Encaminhando props nav
            }

            if (route.id === 'cenaExibirLista') {
              return (
                <View style={{ flex: 1 }}>
                  <BarraNavegacao voltar nav={navigator} />
                </View>
              );
            }
          }}
        />
      </View>
    );
  }
};
