import React, { Component } from 'react';
import {
    Button, 
    Text, 
    View,
    Alert,
	FlatList
} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { TwoRadioButtons } from './TwoRadioButtons.js';
import { CartItem } from './CartItem.js';
import { DropDownListWithLabel } from './DropDownListWithLabel.js';
import { CartStyles } from './CartStyles.js';

/*
	this.props.onCartItemChange(newCartItems);

	this.props.cartItems = [
		{
			foodIndex:
			quantity:
		},
	];
 */

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableNo: -1,
			dineInOrTakeaway: ''
		};
	}

    calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let item of this.props.cartItems) 
       		totalPrice += menuData[item.foodIndex].price * item.quantity;
        // TODO: return float, 2 decimal point
        return totalPrice;
    }

    makeOrder = () => {
        // if (tableNo > 0 && dineInOrTakeaway.length > 0) { // Check all the info have been filled in

        //     // TODO: create an order and save it to database            
		// 	let newOrder = {
		// 		dateTime: new Date(),
		// 		tableNo: 
		// 		dineInOrTakeaway: 
		// 		userEmail: email,
		// 		// id: autoincrement
		// 		foodsOrdered: 
		// 	}

		// 	// new table: food ordered

		// 	Alert.alert("Your order has been made!\nPlease pay at the counter.");
		// 	this.props.navigation.navigate('Order Details', {
		// 		orderId: 
		// 	});
		// 	/*
		// 		keep as little data as possible needed to determine what the screen is. 
		// 		Avoid passing the full data which will be displayed on the screen itself (e.g. pass a user id instead of user object). 
		// 		Also avoid passing data which is used by multiple screens, such data should be in a global store.
		// 	*/
        // } else
        //     ToastAndroid.show("Please fill in all the details.");       
    }

	renderCartItem = (item, index) => {
		return(
			<CartItem 
				foodIndex={item.foodIndex} 
				quantity={item.quantity} 
				onQuantityChange={(newQuantity) => {
					if (newQuantity <= 0) {
						// Ask to remove
						Alert.alert(
							"Do you want to remove this item?",
							[
								{
									text: "No",
									onPress: () => console.log("Cancel Pressed"),
									style: "cancel"
							  	},
							  	{ 
									text: "Yes", 
							  		onPress: () => console.log("OK Pressed") 
								}
							]
						  );
					} else {
						// Modify the quantity
						let newCartItems = this.props.cartItems.slice(); // Copy the array
						newCartItems[index].quantity = newQuantity;
						this.props.onCartItemChange(newCartItems);
					}					
				}}
			/>
		);		
	}

	render() {
		var cartItems = this.props.cartItems;

		if (!cartItems || cartItems.length <= 0) 
			return <Text>No item in your cart.</Text>; // TODO: test that the screen will turn to this when remove all the items from cart

		return(
			<View>
				<FlatList 
					data={cartItems} 
					renderItem={({ item, index }) => this.renderCartItem(item, index)} 
					keyExtractor={item => item.foodIndex} 
				/>
				<Divider />
				<DropDownListWithLabel 
					selected={this.state.tableNo}
					label="Table no." 
					onChange={(no) => this.setState({tableNo: no})} 
					min={1} 
					max={30} 
				/> 
				<TwoRadioButtons 
					selected={this.state.dineInOrTakeaway}
					options={['Dine In', 'Takeaway']} 
					onChange={(option) => this.setState({dineInOrTakeaway: option})} 
				/>
				<Text>Total RM{this.calculateTotalPrice()}</Text> {/* function with (): call this when rendering */}
				<Button 
					title="Order" 
					onPress={this.makeOrder} //function without (): call this when onPress
				/>
			</View>
		);
	}
}