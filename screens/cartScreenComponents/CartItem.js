import {
    Text, 
    View
} from 'react-native';
import { CartStyles } from './CartStyles.js';
import { menuData } from '../MenuData.js';

/*
	props:
	foodIndex
	onQuantityChange
	quantity
 */

function PlusButton(props) {
	/* props of Pressable will be inherit by PlusButton */
	return(
		<Pressable {...props}>
			<Image source={require('./plusIcon.jpg')} />
		</Pressable>
	);
}

function MinusButton(props) {
	return(
		<Pressable {...props}>
			<Image source={require('./minusIcon.png')} />
		</Pressable>
	);
}

export function CartItem(props) {
    let item = menuData[props.foodIndex];

	function goToFoodDetailsPage(foodIndex) {
		this.props.navigation.navigate('Food Details', {
			index: propsfoodIndex
		});
	}

    return(
        <View>
			<Pressable onPress={() => goToFoodDetailsPage(props.foodIndex)}>
				<Image source={item.image} />
				<View>
					<Text>{item.name}</Text>
					<Text>{item.price}</Text>
				</View>
			</Pressable>

			<View>
				<MinusButton onPress={() => props.onQuantityChange(props.quantity - 1)} /> 
				<Text>{props.quantity}</Text>
				<PlusButton onPress={() => props.onQuantityChange(props.quantity + 1)} />			
			</View>
        </View>
    );
}

// TODO layout