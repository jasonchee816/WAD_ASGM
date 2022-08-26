import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuData from '../../screens/MenuData';

function PlusButton(props) {
	/* props of Pressable will be inherit by PlusButton */
	return(
		<Pressable {...props}>
			<Image source={require('./plusIcon.jpg')} style={styles.icon} />
		</Pressable>
	);
}

function MinusButton(props) {
	return(
		<Pressable {...props}>
			<Image source={require('./minusIcon.png')} style={styles.icon}/>
			</Pressable>
	)}
	
function findItem(para_id) {
	for (let i = 0; i < MenuData.length; i++) {
		console.log(MenuData[i].id)
	  if (MenuData[i].id == para_id) {
		return MenuData[i];
	  }
	}
  }
  
  export function CartItem(props) {
	let item = findItem(props.item_id);
	var item_image = item.image;
	console.log(item_image)
	console.log(item)
	return (
	  <View style={styles.container}>
		<Pressable
		  onPress={() => goToFoodDetailsPage(props.item_id)}
		  style={styles.item}>
		  <Image source={{uri: item_image}} style={styles.image} />
		</Pressable>
		<View style={styles.label}>
		  <Text>{item.name}</Text>
		  <Text>{`RM ${item.price.toFixed(2)}`}</Text>
  
		  <View style={styles.modifyQuantity}>
			<MinusButton
			  onPress={() => props.onQuantityChange(props.quantity - 1)}
			/>
			<Text style={styles.quantity}>{props.quantity}</Text>
			<PlusButton
			  onPress={() => props.onQuantityChange(props.quantity + 1)}
			/>
		  </View>

		{/* <View style={styles.AddToCartButtonContainer}>
            <View style={styles.addButton}>
              <Ionicons
                name="remove"
                size={40}
                color='pink'
                onPress={this.removeOne}
              />
            </View>
            <Text style={styles.quantityStyle}>{this.state.quantity}</Text>
            <View style={styles.addButton}>
                <Ionicons
                  name="add"
                  size={40}
                  color='pink'
                  onPress={this.addOne}
                />
              </View>
            </View>*/}
		</View> 
		
	  </View>
	);
  }

const styles = StyleSheet.create({
	container: {
		display:'flex',
		flexDirection:'row',
		backgroundColor: 'rgb(230, 230, 230)',
		marginBottom: 10,
	},
	item: {
		display:'flex',
		flexDirection:'row',
	},
	label: {
		fontSize: 16,
		marginLeft: 10,
		marginTop: 5,
	},
	image: {
		width: 170,
  		height: 100,
		marginLeft: 0
	},
	icon: {
		width: 25,
   		height: 25,
	},
	modifyQuantity: {
		marginTop: 5,
		display:'flex',
		flexDirection:'row',
		backgroundColor: 'white',
		width: 80,
	},
	quantity: {
		fontSize: 17,
		paddingHorizontal: 10,
	}
})