// TODO: an order id passed from cart screen, need to display the order details

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
export default class OrderDetailsScreen extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>OrderDetailsScreen</Text>
      </View>
    );
  }
}
