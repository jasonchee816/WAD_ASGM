import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

/**
 * @param {string} props.selected name of selected button
 * @param {String[]} props.options name of buttons
 * @param {Function(String)} props.onChange callback function
 */

export function TwoRadioButtons(props) {
	const [checked, setChecked] = React.useState(props.selected); // TODO need props.option ?

	return (
		<View style={styles.container}>
			{props.options.map((option) => {
				return(
					<Pressable 
						key={option} // Need a key to identify each item
						onPress={() => {
							setChecked(option);
							props.onChange(option);
						}} // Need "() =>" to declare the function, the argument of onPress is a function
						style={[styles.option, checked == option ? styles.selected : styles.notSelected]}
					>
						<Text>{option}</Text>
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		display:'flex',
		flexDirection:'row',
		alignItems: "center",
		margin: 7
	},
	option: {
		padding: 9,
		width: 100,
		textAlign: 'center',
		alignItems: "center",
	},
	selected: {
		backgroundColor: '#5da3f0'
	},
	notSelected: {
		backgroundColor: 'rgb(220, 220, 220)'
	}
});