import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import MenuData from '../../screens/MenuData';
function findItem(para_id) {
	for (let i = 0; i < MenuData.length; i++) {
	  if (MenuData[i].id == para_id) {
		return MenuData[i];
	  }
	}
  }
  
  export function CartItem(props) {
	let item = findItem(props.item_id);
	console.log(item)
	return (
	  <View style={styles.container}>
		<Pressable
		  onPress={() => goToFoodDetailsPage(props.item_id)}
		  style={styles.item}>
		  <Image source={{uri: item.image}} style={styles.image} />
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