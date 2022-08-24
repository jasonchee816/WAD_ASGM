// TODO: an order id passed from cart screen, need to display the order details

import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Switch,
  TouchableNativeFeedback,
  Alert,
  Image,
} from 'react-native';
import {MenuData} from '../screens/test';
import {InputWithLabel} from '../UI';

let config = require('../Config');

export default class OrderDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      order_items: [],
      isFetching: false,
    };
    this._load = this._load.bind(this);
  }

  _load() {
    const item = this.props.route.params;
    console.log(item);
    let url = config.settings.serverPath + '/api/order/' + item.id;
    this.setState({isFetching: true});
    fetch(url)
      .then(response => {
        // console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        this.setState({isFetching: false});
        return response.json();
      })
      .then(order_item => {
        this.setState({order_items: order_item});
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this._load();
  }

  render() {
    console.log(this.state.order_items);
    // console.log(this.state.food_info);
    return (
      <View style={{flex: 1, margin: 5}}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          data={this.state.order_items}
          renderItem={({item}) => {
            let total = Number(item.quantity) * Number(item.price);
            return (
              <TouchableNativeFeedback>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                  }}>
                  <InputWithLabel
                    label={item.item_name}
                    // orientation={'horizontal'}
                    textLabelStyle={{fontSize: 20}}
                    textInputStyle={{
                      fontSize: 20,
                    }}
                    value={'Price per item: RM' + item.price}
                    editable={false}></InputWithLabel>
                  <InputWithLabel
                    label={'x' + item.quantity}
                    // orientation={'horizontal'}
                    textLabelStyle={{fontSize: 20}}
                    textInputStyle={{
                      fontSize: 20,
                      textAlign: 'right',
                      fontWeight: 'bold',
                      padding: 9,
                      paddingBottom: 12,
                    }}
                    value={'RM' + total}
                    editable={false}></InputWithLabel>
                </View>
              </TouchableNativeFeedback>
            );
          }}></FlatList>

        <Text>{'Total:' + this.props.route.params.total_price}</Text>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <Text style={{fontSize: 50}}>Order History Screen</Text>
  //       <Button
  //         title="Go to Details"
  //         onPress={() => this.props.navigation.navigate('Order Details')}
  //       />
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 15,
  },

  input: {
    color: 'black',
  },
});
