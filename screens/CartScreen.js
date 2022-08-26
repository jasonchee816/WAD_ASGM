import React, {Component} from 'react';
import {Button, Text, View, Alert, FlatList, StyleSheet} from 'react-native';

import {TwoRadioButtons} from '../components/cartScreenComponents/TwoRadioButtons.js';
import {CartItem} from '../components/cartScreenComponents/CartItem.js';
import {DropDownListWithLabel} from '../components/cartScreenComponents/DropDownListWithLabel.js';
import MenuData from './MenuData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
/**
 * @class 	display cart items,
 * 			increase or decrease quantity of an item,
 * 			remove an item,
 * 			make order,
 * 			navigate to details of an item
 *
 * @requires menuData information of the food, array of objects
 *
 * @property {Object[]} this.state.cartItems
 * @property {Number} this.state.cartItems[i].item_id the index in menuData
 * @property {Number} this.state.cartItems[i].quantity the number of item wants to order
 */

let config = require('../Config');

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      order_id: '',
      total_price: '',
      user_id: '',
      tableNo: 1,
      dineInOrTakeaway: '',
      cartItems: [],
    };

    this._clear_cart = this._clear_cart.bind(this);
    this.findItem = this.findItem.bind(this);
    this._save = this._save.bind(this);
    this._addOrderItem = this._addOrderItem.bind(this);
    this._edit = this._edit.bind(this);
    this._delete = this._delete.bind(this);
    this._load = this._load.bind(this);
    this._readSettings = this._readSettings.bind(this);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this._readSettings();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _load() {
    let id = this.state.user_id - 0;
    let url = config.settings.serverPath + '/api/cart/' + id;
    this.setState({isFetching: true});
    fetch(url)
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        this.setState({isFetching: false});
        return response.json();
      })
      .then(cartItems => {
        this.setState({cartItems: cartItems});
        this.calculateTotalPrice();
      })
      .catch(error => {
        console.log(error);
      });
  }

  _save() {
    let url = config.settings.serverPath + '/api/addOrder';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_id: this.state.user_id,
        total_price: this.state.total_price,
      }),
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error Requesting');
          throw Error('Error ' + response.status);
        }

        return response.json();
      })

      .then(respondJson => {
        if (respondJson.affected > 0) {
          Alert.alert('Item is added successfully.');
          this.setState({order_id: respondJson.id});
          this.state.cartItems.map(item => {
            this._addOrderItem(item.item_id, item.quantity);
          });
          return respondJson.affected;
        } else {
          Alert.alert('Error in SAVING');
        }
      })
      .then(response => {
        this._clear_cart();
      })
      .catch(error => {
        console.log(error);
      });
  }

  _addOrderItem(id, itemQuantity) {
    let url = config.settings.serverPath + '/api/addOrderItem';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: this.state.order_id,
        item_id: id,
        quantity: itemQuantity,
      }),
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error Requesting');
          throw Error('Error ' + response.status);
        }

        return response.json();
      })

      .then(respondJson => {
        if (respondJson.affected > 0) {
          //   Alert.alert('Order Item is added successfully.');
        } else {
          Alert.alert('Error in SAVING');
        }
        // this.props.route.params._refresh();
        // this.props.navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  async _readSettings() {
    try {
      let id = await AsyncStorage.getItem('user_id');
      if (id !== null) {
        this.setState({user_id: id});
        this._load();
      }
    } catch (error) {
      console.log('## ERROR READING ITEM ##: ', error);
    }
  }

  _delete(item_id) {
    let url = config.settings.serverPath + '/api/deleteCart';
    fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: this.state.user_id, item_id: item_id}),
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        return response.json();
      })
      .then(responseJson => {
        this.calculateTotalPrice();
        if (responseJson.affected == 0) {
          Alert.alert('Error in DELETING');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  _clear_cart() {
    let url = config.settings.serverPath + '/api/clearCart';
    fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: this.state.user_id}),
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.affected == 0) {
          Alert.alert('Error in DELETING');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  _edit(id, newQuantity) {
    let url = config.settings.serverPath + '/api/updateQty';

    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: newQuantity,
        user_id: this.state.user_id,
        item_id: id,
      }),
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }

        return response.json();
      })
      .then(respondJson => {
        this.calculateTotalPrice();
        if (respondJson.affected > 0) {
        } else {
          Alert.alert('Error in UPDATING');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  findItem(para_id) {
    for (let i = 0; i < MenuData.length; i++) {
      if (MenuData[i].id == para_id) {
        return MenuData[i];
      }
    }
  }

  /** @return {String} total price with 2 decimal place */
  calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let item of this.state.cartItems) {
      let info = this.findItem(item.item_id);
      totalPrice += info.price * item.quantity;
    }
    this.setState({total_price: totalPrice});
  };

  makeOrder = () => {
    this._save();
    this.props.navigation.navigate('MainMenu');
    Alert.alert('Order Made Successfully');
  };

  /** to be called by FlatList */
  renderCartItem = (item, index) => {
    return (
      <CartItem
        item_id={item.item_id}
        quantity={item.quantity}
        onQuantityChange={newQuantity => {
          if (newQuantity <= 0) {
            // Ask to remove
            Alert.alert('Do you want to remove this item?', null, [
              {
                text: 'No',
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                  let newCartItems = this.state.cartItems.slice();
                  newCartItems.splice(index, 1); // Remove 1 element
                  this.setState({cartItems: newCartItems});
                  this._delete(item.item_id);
                },
              },
            ]);
          } else {
            // Modify the quantity
            let newCartItems = this.state.cartItems.slice(); // Copy the array
            newCartItems[index].quantity = newQuantity;
            this.setState({cartItems: newCartItems});
            this._edit(item.item_id, newQuantity);
          }
        }}
      />
    );
  };

  render() {
    if (!this.state.cartItems || this.state.cartItems.length <= 0)
      return <Text style={styles.blankContainer}>No item in your cart.</Text>; // TODO: test that the screen will turn to this when remove all the items from cart

    // below FlatList component
    let footerComponent = () => (
      <View>
        <Text style={styles.totalPrice}>
          {'Total RM' + Number(this.state.total_price).toFixed(2)}
        </Text>
        <Button onPress={this.makeOrder} title={'Order'} />
      </View>
    );

    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          x
          extraData={this.state}
          data={this.state.cartItems}
          renderItem={({item, index}) => this.renderCartItem(item, index)}
          keyExtractor={item => item.item_id}
          ListFooterComponent={footerComponent}
        />
      </View>
    );
    // function with (): call this when rendering
    // function without (): call this when onPress
  }
}

const styles = StyleSheet.create({
  blankContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '50%',
    padding: 112,
    height: '100%',
  },
  totalPrice: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 9,
    paddingBottom: 12,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
