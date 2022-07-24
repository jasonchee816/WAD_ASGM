import React, { Component } from 'react';
import {
    Button, 
    Text, 
    View,
    Alert,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { TwoRadioButtons } from './TwoRadioButtons.js';
import { CartItem } from './CartItem.js';
import { DropDownListWithLabel } from './DropDownListWithLabel.js';
import { MenuData } from '../MenuData.js';
import { CartStyles } from './CartStyles.js';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
            dateTime: null,
            tableNo: 0,
            cartItems: [],
            dineInOrTakeaway: ''
        }
    }

    addToCart = (foodId) => { // TODO: props
        let newItem = {
            id: foodId,
            quantity: 1
        }
        this.setState(prevState => ({
           cartItems: [...prevState.cartItems, newItem]
        }));
    }

    handleItemQuantityChange = (id, quantity) => {
        if (quantity <= 0)
            // TODO: remove from cartItems
        else {

        }

    }

    handleTableInputChange = (num) => {
        this.setState({
            tableNo: num
        });
    }

    handleDineInOrTakeawayChange = (option) => {
        this.setState({
            dineInOrTakeaway: option
        });
    }

    calculateTotalPrice = () => {
        let totalPrice = 0;
        let itemPrice = 0;
        for (let item of this.state.cartItems) 
        totalPrice += MenuData[item.id].price * item.quantity;
        // TODO: return float, 2 decimal point
        return totalPrice;
    }

    makeOrder = () => {
        // Check all the info have been filled in
        if (this.state.cartItems && this.state.cartItems.length > 0
            && this.state.tableNo > 0 
            && dineInOrTakeaway.length > 0) {

            Alert.alert("Your order has been made!\nPlease pay at the counter.");
            
            // TODO: create an order and save it to database
            let currentTime = new Date();
            

            // TODO go to order history detail page
        } else
            ToastAndroid.show("Please fill in all the details.");       
    }

    render() {
        if (!this.state.cartItems || this.state.cartItems.length <= 0) 
            return <Text>No item in your cart.</Text>;

        return(
            <View>
                // TODO: flatlist
                <CartItem 
                    itemId={this.state.cartItems[0].id} 
                    quantity={this.state.cartItems[0].quantity} 
                    onQuantityChange={this.handleItemQuantityChange} />

                <Divider />

                {/* Table Number Input */}
                <DropDownListWithLabel label="Table no." onChange={this.handleTableInputChange} min={0} max={30} /> 

                {/* Dine in or takeaway option */}
                <TwoRadioButtons button1="Dine in" button2="Takeaway" onChange={this.handleDineInOrTakeawayChange} />

                {/* Total Price */}
                <Text>Total RM{this.calculateTotalPrice()}</Text>

                {/* Make Order Button */}
                <TouchableHighlight>
                    <Button title="Order" onPress={this.makeOrder}/>
                </TouchableHighlight>
            </View>
        );
    }
}