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
import { CartStyles } from './CartStyles.js';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

/*
	props = cartItems = [
		{
			foodIndex:
			quantity:
		},
	];
 */

export default class Cart {
	constructor(props) {
		super(props);
		this.state = {
			tableNo: undefined,
			dineInOrTakeaway: ''
		};
	}

	setTableNo = (no) => {
		this.setState({tableNo: no});
	}

	setDineInOrTakeaway = (option) => {
		this.setState({dineInOrTakeaway: option});
	}

    setItemQuantity = (index, quantity) => {
		// if quantity < 0, quantity = 0
		if (quantity == 0) {
            <Dialog 
                isVisible={true}>
                <Dialog.Title title="Do you want to delete this item" />
                <Dialog.Actions>
                    <Dialog.Button title="Yes" onPress={setVisible} />
                    <Dialog.Button title="No" onPress={setVisible} />
                </Dialog.Actions>
            </Dialog>
        }

        if (quantity <= 0) {
			// TODO: ask if wants to remove
			// TODO: remove from cartItems
			
			return;
		}
		route.navigation.setParams({
			cartItems: 
		});
    }
	
    calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let item of cartItems) 
       		totalPrice += menuData[item.foodIndex].price * item.quantity;
        // TODO: return float, 2 decimal point
        return totalPrice;
    }

    makeOrder = () => {
        if (tableNo > 0 && dineInOrTakeaway.length > 0) { // Check all the info have been filled in

            // TODO: create an order and save it to database            
			let newOrder = {
				dateTime: new Date(),
				tableNo: 
				dineInOrTakeaway: 
				userEmail: email,
				// id: autoincrement
				foodsOrdered: 
			}

			// new table: food ordered

			Alert.alert("Your order has been made!\nPlease pay at the counter.");
			this.props.navigation.navigate('Order Details', {
				orderId: 
			});
			/*
				keep as little data as possible needed to determine what the screen is. 
				Avoid passing the full data which will be displayed on the screen itself (e.g. pass a user id instead of user object). 
				Also avoid passing data which is used by multiple screens, such data should be in a global store.
			*/
        } else
            ToastAndroid.show("Please fill in all the details.");       
    }

	render() {
		var cartItems = props.cartItems;
		var email = props.email;

		if (!cartItems || cartItems.length <= 0) 
			return <Text>No item in your cart.</Text>; // TODO: test that the screen will turn to this when remove all the items from cart

		return(
			<View>
				// TODO: flatlist
				<CartItem 
					foodIndex={cartItems[0].foodIndex} 
					quantity={cartItems[0].quantity} 
					onQuantityChange={this.setItemQuantity} />
				<Divider />
				<DropDownListWithLabel label="Table no." onChange={this.setTableNo} min={1} max={30} /> 
				<TwoRadioButtons button1="Dine in" button2="Takeaway" onChange={this.setDineInOrTakeaway} />
				<Text>Total RM{this.calculateTotalPrice()}</Text>

				<TouchableHighlight>
					<Button title="Order" onPress={this.makeOrder}/>
				</TouchableHighlight>
			</View>
		);
	}
}