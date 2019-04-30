import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import axios from 'axios'; //Para fazer a requisição HTTP

const styles = StyleSheet.create({
	view: {
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	view2: {
		margin: 5,
		justifyContent: 'center',
		
	},
	input: {
		fontSize: 20,
		borderRadius: 4,
		borderWidth: 0.5,
		padding: 10,
		flex: 0.98,
		justifyContent: 'center'
	}
});

export default class HomeLista extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valorInput: null
		};
		this.atualizaValor = this.atualizaValor.bind(this);
	}

	atualizaValor(getText) {
		this.setState({ valorInput: getText })
	}

	editItem = (editarItem, idItem) => {
		this.atualizaValor(editarItem);
		this.itemId = idItem
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
		const { input, view, view2 } = styles;
		let valorNoInput = this.state.valorInput;

		//alert(this.props.listarItens);
		return (
			<View style={view2}>
				<SafeAreaView style={view}>
					<TextInput
						style={input}
						value={valorNoInput}
						onChangeText={textValue => this.atualizaValor(textValue)}
						placeholder='Digite aqui'
						maxLength={120}
					/>
					<TouchableOpacity
						onPress={
							() => {
								if (valorNoInput == null) {
									alert('Insira alguma coisa')
								} else {
									if (this.itemId) {
										//alert(getId._id);
										axios.put(`http://localhost:3000/products/${this.itemId}`, { description: valorNoInput })
											.then(res => {
												this.setState({ listarItens: res.data, valorNoInput: '' })
												this.itemId = null
											})
											.catch((e) => {
												console.log(e)
												console.log('n salvou')
											})
									} else {
										axios.post('http://localhost:3000/products', { description: valorNoInput })
											.then(response => {
												this.props.onSave(response.data.data);
												alert('Salvo')
											})
											.catch(e => {
												console.log(e);
											});
									}
								}
								this.onChangeText = this.atualizaValor(this.editItem());
							}
						}
					>
						<Image source={require("../imgs/add.png")}
							style={{
								width: 40,
								height: 40
							}} >
						</Image>
					</TouchableOpacity>
				</SafeAreaView>
			</View>
		);
	}
};
