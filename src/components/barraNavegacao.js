import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    viewBarraNav:{
        backgroundColor: "#1d2be5",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBarraNav:{
        fontSize:30,
        padding: 10,
        color: "#FFF",
        fontWeight: '700'
    }
});

export default class BarraNavegacao extends Component { //Default = app
  render(){
      const btnVoltar = require('../imgs/btn_voltar.png');
      const {viewBarraNav, textBarraNav} = styles;

      if(this.props.voltar){
        return (
         <SafeAreaView style={viewBarraNav}>
            <TouchableOpacity
             onPress={()=>{
               this.props.nav.pop();
             }}
            >
             <Image source={btnVoltar}/>
            </TouchableOpacity>
            <Text style={textBarraNav}>Full Stack</Text>
         </SafeAreaView>
        );
      }
      
      return (
         <SafeAreaView style={viewBarraNav}>
             <Text style={textBarraNav}>Full Stack</Text>
         </SafeAreaView>
      );
  }
};
