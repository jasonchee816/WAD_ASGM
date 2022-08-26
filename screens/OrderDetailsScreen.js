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
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import {MenuData} from '../screens/test';
import {InputWithLabel, BackButton} from '../UI';

let config = require('../Config');

export default class OrderDetailsScreen extends Component {
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
      <View style={{flex: 1}}>
        <BackButton title="Order Details" onPress={this.props.navigation.goBack}/>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          data={this.state.order_items}
          renderItem={({item}) => {
            let total = Number(item.quantity) * Number(item.price);
            return (
              <TouchableHighlight>
                <View
                  style={styles.orderDetailsCard}>
                  <InputWithLabel
                    label={item.item_name}
                    // orientation={'horizontal'}
                    textLabelStyle={styles.label}
                    textInputStyle={styles.input}
                    value={'Price per item: RM' + item.price}
                    editable={false}/>
                  <InputWithLabel
                    label={'x' + item.quantity}
                    // orientation={'horizontal'}
                    textLabelStyle={styles.label}
                    textInputStyle={styles.inputPrice}
                    value={'RM' + total}
                    editable={false}/>
                </View>
              </TouchableHighlight>
            );
          }}></FlatList>

        <Text style={styles.totalPriceStyle}>{'Total: RM ' + this.props.route.params.total_price}</Text>
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
  orderDetailsCard: {
    height: 150,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },

  input: {
    fontSize: 20,
    color: 'gray',
  },
  inputPrice: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'right',
  },
  totalPriceStyle: {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    elevation: 25,
    borderRadius: 10,
    padding: 15,
    textAlign: 'right',
  },
});
