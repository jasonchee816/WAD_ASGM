import {
    Text, 
    View
} from 'react-native';
import { TouchableOpacity, TouchableHightlight } from 'react-native-gesture-handler';
import { CartStyles } from './CartStyles.js';
import { menuData } from '../MenuData.js';

/*
	props:
	foodIndex
	onQuantityChange
	quantity
 */

export function CartItem(props) {
    let item = menuData[props.foodIndex];
	
	function goToFoodDetailsPage() {
		this.props.navigation.navigate('Food Details', {
			index: props.foodIndex
		});
	}

    return(
        <View>
			<TouchableHightlight onPress={goToFoodDetailsPage()}>
				<Image source={item.image} />
				<Text>{item.name}</Text>
				<Text>{item.price}</Text>	
			</TouchableHightlight>

			<View>
				<TouchableOpacity onPress={props.onQuantityChange(props.quantity - 1)}>
					<Image source={require('./minusIcon.png')} />
				</TouchableOpacity>
				<Text>{props.quantity}</Text>
				<TouchableOpacity onPress={props.onQuantityChange(props.quantity + 1)}>
					<Image source={require('./plusIcon.jpg')} />
				</TouchableOpacity>
			</View>
        </View>
    );
}