import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Itens extends Component {
    render() {
        const { item, titles } = styles;
        return (
            <View style={item}>
                <Text>
                    <Text style={titles}>  {this.props.item.description}  </Text>
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 2,
        marginHorizontal: 5,
        flex: 1,
        padding: 0.5,
        justifyContent: 'center'
    },
    titles: {
        fontSize: 15
    }
})