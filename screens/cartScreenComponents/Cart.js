import React, { Component } from 'react';
import {
    StyleSheet, 
    Button, 
    Text, 
    View
} from 'react-native';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
            dateTime: null,
            tableNo: undefined,
            cartItems: []
        }
    }

    render() {
        if (!this.state.cartItems || this.state.cartItems.length <= 0) 
            return <Text>No item in your cart.</Text>;

        return(
            <View>
                
            </View>
        );
    }
}