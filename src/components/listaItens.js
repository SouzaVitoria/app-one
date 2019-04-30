import React, { Component } from 'react';
import { SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Itens from './Itens';
import axios from 'axios'; //Para fazer a requisição HTTP

const styles = StyleSheet.create({
  
  viewLista: {
    marginHorizontal: 4,
    marginVertical: 2,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    padding: 1
  }
});

export default class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listarItens: []
    }
  }

  addNewItem = newItem => {
    this.setState({ listarItens: [...this.state.listarItens, newItem] })
    // const listarItens = this.state.listarItens.splice()
    // this.setState({ listarItens })
  }

  eDeleteItem = deleteItem => {
    const listarItens = [...this.state.listarItens]
    const index = (listarItens || []).findIndex(elemento => elemento._id === deleteItem._id)
    if (index !== -1) {
      listarItens.splice(index, 1)
      this.setState({ listarItens })
    }
  }


  componentWillMount() { //Fazer aquisição HTTP
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({ listarItens: response.data })
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados');
      });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f5ff' }}>
        <FlatList 
          data={this.state.listarItens}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.viewLista} >
                <Itens key={item._id} item={item} />
                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={
                   () => {
                     this.props.onEdit(item.description, item._id);
                   }
                }>
                  <Image source={require('../imgs/edit.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                </View>
                
                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={
                  () => {
                    axios.delete(`http://localhost:3000/products/admin/${item._id}`)
                      .then(() => {
                        alert("Removido")
                        this.eDeleteItem(item);
                      })
                      .catch((e) => {
                        console.log(e)
                      })
                  }
                }>
                  <Image source={require('../imgs/delete.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </SafeAreaView>
    );
  }
};