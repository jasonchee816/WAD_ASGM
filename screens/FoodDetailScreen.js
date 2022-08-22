import react, {Component} from 'react';
import {View, Text} from 'react-native';

// let foodData = require('../data/food')

export default class FoodDetailScreen extends Component<Props> {
  render() {
    let food = this.props.params.food;
    let foodName = foods[food].foodName;
    let foodDesc = foods[food].foodDesc;
    let foodPrice = foods[food].foodPrice;
    this.props.navigation.setOptions({
      title: foodName,
    });

    return <View></View>;
  }
}
// TODO: an index of menuData passed from cart screen, need to display the food details
