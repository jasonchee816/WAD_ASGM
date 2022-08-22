import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker --save

/**
 * @property {Number} props.min minimum value that could be selected
 * @property {Number} props.max maximum value that could be selected
 * @property {Function(Number): void} props.onChange call back function
 * @property {String} props.label caption of the input
 * @property {Number} props.selected selected value
 */

export function DropDownListWithLabel(props) {
	// Create picker items
	let tableNos = [];
	for (let no = props.min, i = 0; no <= props.max; ++no, ++i)
		tableNos[i] = no;
	let pickerItems = tableNos.map((num) => 
		<Picker.Item key={num} label={num.toString()} value={num} style={styles.pickerItem}/>
	);

	const [tableNo, setTableNo] = React.useState(props.tableNo);

	return(
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<Picker 
				style={styles.picker}
				selectedValue={tableNo}
				onValueChange={(input) => {
					props.onChange(input); // pass the value to the parent component
					setTableNo(input); // reflect the changes in UI
				}} 
			>
				{pickerItems}
			</Picker>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		display:'flex',
		flexDirection:'row',
		//height: 40,
		margin: 8
	},
	label: {
		fontSize: 17,
		padding: 15,
		fontWeight: "bold",
	},
	picker: {
		width: 90,
		
		backgroundColor: 'rgb(220, 220, 220)',
	},
	pickerItem: {
		fontSize: 17,
	}
});