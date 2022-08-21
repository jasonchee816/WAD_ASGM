import {
    Button, 
    Text, 
    View
} from 'react-native';
import { CartStyles } from './CartStyles.js';

export function TwoRadioButtons(props) {
	const [checked, setChecked] = React.useState('');

	return (
		<View>
			{props.options.map((option) => {
				return(
					<Pressable 
						key={option} // Need a key to identify each item
						onPress={() => {
							setChecked(option);
							props.onChange(option);
						}} // Need "() =>" to declare the function, the argument of onPress is a function
						style={checked == option ? styles.selected : styles.notSelected}
					>
						<Text>{option}</Text>
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	selected: {
		backgroundColor: 'rgb(210, 230, 255)'
	},
	notSelected: {
		backgroundColor: 'white'
	}
});

// TODO layout