import React, { Component } from 'react';
import { Button, Text, View, Alert, FlatList, StyleSheet } from 'react-native';

import { TwoRadioButtons } from './cartScreenComponents/TwoRadioButtons.js';
import { CartItem } from './cartScreenComponents/CartItem.js';
import { DropDownListWithLabel } from './cartScreenComponents/DropDownListWithLabel.js';
import { menuData } from './MenuData.js';

/**
 * @class 	display cart items, 
 * 			increase or decrease quantity of an item, 
 * 			remove an item, 
 * 			make order,
 * 			navigate to details of an item
 * 
 * @requires menuData information of the food, array of objects
 * 
 * @property {Object[]} this.props.cartItems
 * @property {Number} this.props.cartItems[i].foodIndex the index in menuData
 * @property {Number} this.props.cartItems[i].quantity the number of item wants to order
 * 
 * @property {Function(Object[]): void} this.props.onCartItemChange callback function, parameter is updated CartItems

	this.props.cartItems = [
		{
			foodIndex:
			quantity:
		},
	];
 */

export class CartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableNo: 1,
			dineInOrTakeaway: ''
		};
	}

	/** @return {String} total price with 2 decimal place */
    calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let item of this.props.cartItems) 
       		totalPrice += menuData[item.foodIndex].price * item.quantity;
        return totalPrice.toFixed(2);
    }

    makeOrder = () => {
        // if (dineInOrTakeaway.length > 0) { // Check all the info have been filled in

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

	/** to be called by FlatList */
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
							null,
							[
								{
									text: "No",
									style: "cancel"
							  	},
							  	{ 
									text: "Yes", 
							  		onPress: () => {
										let newCartItems = this.props.cartItems.slice();
										newCartItems.splice(index, 1); // Remove 1 element
										console.log(newCartItems);
										this.props.onCartItemsChange(newCartItems);
									  }
								}
							]
						  );
					} else {
						// Modify the quantity
						let newCartItems = this.props.cartItems.slice(); // Copy the array
						newCartItems[index].quantity = newQuantity;
						this.props.onCartItemsChange(newCartItems);
					}					
				}}
			/>
		);		
	}

	render() {
		if (!this.props.cartItems || this.props.cartItems.length <= 0) 
			return <Text style={styles.blankContainer}>No item in your cart.</Text>;

		// below the FlatList component
		let footerComponent = () => (
			<View>
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
				<Text style={styles.totalPrice}	>
					{`Total RM${this.calculateTotalPrice()}`}
				</Text> 
				<Button 
					onPress={this.makeOrder} 
					title={'Order'} 
				/>
			</View>
		);

		return (
			<View style={styles.container}>
				<FlatList 
					data={this.props.cartItems} 
					renderItem={({ item, index }) => this.renderCartItem(item, index)} 
					keyExtractor={item => item.foodIndex} 
					ListFooterComponent={footerComponent}
				/>
			</View>
		);
		// function with (): call this when rendering
		// function without (): call this when onPress
	}
}

const styles = StyleSheet.create({
	blankContainer: {
		justifyContent: "center",
		alignItems: "center",
		fontSize: 20,
		fontWeight: "bold",
		marginTop: '50%',
		padding: 112,
		height: '100%',
	},
	totalPrice: {
		textAlign: 'center',
		alignItems: "center",
		padding: 9,
		paddingBottom: 12,
		fontSize: 15,
		fontWeight: "bold",
	},
});