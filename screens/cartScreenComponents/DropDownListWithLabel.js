import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CartStyles } from './CartStyles.js';

/*
	props:
	min
	max
	onChange
	label
 */ 

export function DropDownListWithLabel(props) {
	// Create picker items
	let tableNos = [];
	for (let no = props.min, i = 0; no <= props.max; ++no, ++i)
		tableNos[i] = no;
	let pickerItems = tableNos.map((num) => 
		<Picker.Item key={num} label={num.toString()} value={num}/>
	);

	const [tableNo, setTableNo] = React.useState();

	return(
		<View>
			<Text>{props.label}</Text>
			<Picker 
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

// TODO layout