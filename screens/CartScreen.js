import React, { Component } from 'react';
import { Button, Text, View, Alert, FlatList, StyleSheet } from 'react-native';

import { TwoRadioButtons } from '../components/cartScreenComponents/TwoRadioButtons.js';
import { CartItem } from '../components/cartScreenComponents/CartItem.js';
import { DropDownListWithLabel } from '../components/cartScreenComponents/DropDownListWithLabel.js';
import { AllMenu } from './AllMenu.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
/**
 * @class 	display cart items, 
 * 			increase or decrease quantity of an item, 
 * 			remove an item, 
 * 			make order,
 * 			navigate to details of an item
 * 
 * @requires menuData information of the food, array of objects
 * 
 * @property {Object[]} this.state.cartItems
 * @property {Number} this.state.cartItems[i].item_id the index in menuData
 * @property {Number} this.state.cartItems[i].quantity the number of item wants to order
 */

let config = require('../Config');

export default class CartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			user_id: '',
			tableNo: 1,
			dineInOrTakeaway: '',
			cartItems: [],
		};
		
		// this._setQuantityFromDatabase = this._setQuantityFromDatabase.bind(this);
		// this._deleteItemFromDatabase = this._deleteItemFromDatabase.bind(this);
		this._edit = this._edit.bind(this);
		this._delete = this._delete.bind(this);
		this._load = this._load.bind(this);
		this._readSettings = this._readSettings.bind(this);
	}

	componentDidMount() {
		this._unsubscribe = this.props.navigation.addListener('focus', () => {
		  this._readSettings();
		});
	  }
	
	  componentWillUnmount() {
		this._unsubscribe();
	  }

	_load() {
		let id = this.state.user_id-0;
		let url = config.settings.serverPath + '/api/cart/' + id;
		this.setState({ isFetching: true });
		fetch(url)
		  .then(response => {
			console.log(response);
			if (!response.ok) {
			  Alert.alert('Error:', response.status.toString());
			  throw Error('Error ' + response.status);
			}
			this.setState({ isFetching: false });
			return response.json();
		  })
		  .then(cartItems => {
			this.setState({ cartItems: cartItems });
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }

	async _readSettings() {
		try {
			let id = await AsyncStorage.getItem('user_id');
			if (id !== null) {
				console.log(parseInt(id))
				this.setState({ user_id: id });
				this._load();
			}
		} catch (error) {
			console.log('## ERROR READING ITEM ##: ', error);
		}
		
	}

	// _setQuantityFromDatabase(id, quantity) {
	// 	this.db.transaction(tx => tx.executeSql('UPDATE food SET quantity=? WHERE id = ?', [quantity, id]));
	// }

	// _deleteItemFromDatabase(id) {
	// 	this.db.transaction(tx => tx.executeSql('DELETE FROM food WHERE id = ?', [id]));
	// }
	_delete(item_id) {
			  let url = config.settings.serverPath + '/api/deleteCart' ;
			  fetch(url, {
				method: 'DELETE',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({user_id: this.state.user_id, item_id: item_id}),
			  })
				.then(response => {
				  if (!response.ok) {
					Alert.alert('Error:', response.status.toString());
					throw Error('Error ' + response.status);
				  }
				  return response.json();
				})
				.then(responseJson => {
				  if (responseJson.affected == 0) {
					Alert.alert('Error in DELETING');
				  }
				})
				.catch(error => {
					
				  console.log(error);
				});
			//   this.props.route.params._refresh();
			//   this.props.navigation.goBack();
			}
		

	_edit(id, newQuantity) {
		let url = config.settings.serverPath + '/api/updateQty' ;
	
		fetch(url, {
		  method: 'PUT',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			quantity: newQuantity,
			user_id: this.state.user_id,
			item_id: id,
		  }),
		})
		  .then(response => {
			console.log(response);
			if (!response.ok) {
			  Alert.alert('Error:', response.status.toString());
			  throw Error('Error ' + response.status);
			}
	
			return response.json();
		  })
		  .then(respondJson => {
			if (respondJson.affected > 0) {
			  Alert.alert('Update Succesfully');
			} else {
			  Alert.alert('Error in UPDATING');
			}
			// this.props.route.params._refresh();
			// this.props.navigation.goBack();
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }
	
	

	/** @return {String} total price with 2 decimal place */
	calculateTotalPrice = () => {
		let totalPrice = 0;
		for (let item of this.state.cartItems)
			totalPrice += AllMenu[item.item_id].price * item.quantity;
		return totalPrice.toFixed(2);
	}

	makeOrder = () => {
		// email
		// datetime
		// table no
		// dine in or takeaway
		// order id
		// cart items

		// clear cart item

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
		return (
			<CartItem
				item_id={item.item_id}
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
										let newCartItems = this.state.cartItems.slice();
										newCartItems.splice(index, 1); // Remove 1 element
										this.setState({ cartItems: newCartItems });
										this._delete(item.item_id);
									},
									
								}
							]
						);
					} else {
						// Modify the quantity
						let newCartItems = this.state.cartItems.slice(); // Copy the array
						newCartItems[index].quantity = newQuantity;
						this.setState({ cartItems: newCartItems });
						this._edit(item.item_id, newQuantity);
					}
				}}
			/>
		);
	}

	render() {
		// console.log(AllMenu[0]);
		// // console.log(AllMenu);

		if (!this.state.cartItems || this.state.cartItems.length <= 0) 
			return <Text style={styles.blankContainer}>No item in your cart.</Text>; // TODO: test that the screen will turn to this when remove all the items from cart

		// below FlatList component
		let footerComponent = () => (
			<View>
				<DropDownListWithLabel
					selected={this.state.tableNo}
					label="Table no."
					onChange={(no) => this.setState({ tableNo: no })}
					min={1}
					max={30}
				/>
				<TwoRadioButtons
					selected={this.state.dineInOrTakeaway}
					options={['Dine In', 'Takeaway']}
					onChange={(option) => this.setState({ dineInOrTakeaway: option })}
				/>
				<Text style={styles.totalPrice}	>
					{`Total RM${this.calculateTotalPrice()}`}
				</Text>
				<Button
					// onPress={this.makeOrder}
					title={'Order'}
				/>
			</View>
		);

		return (
			<View style={styles.container}>
				<FlatList 
					refreshing={this.state.isFetching}
					onRefresh={this._load}x
					extraData = {this.state}
					data={this.state.cartItems} 
					renderItem={({ item, index }) => this.renderCartItem(item, index)} 
					keyExtractor={item => item.item_id} 
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