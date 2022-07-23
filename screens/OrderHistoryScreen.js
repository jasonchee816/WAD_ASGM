import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
export default class OrderHistoryScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>Order History Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Order Details')}
        />
      </View>
    );
  }
}
