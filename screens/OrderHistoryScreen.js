import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Switch,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { InputWithLabel } from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';

let config = require('../Config');

export default class OrderHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      orders: [],
      isFetching: false,
    };
    this._load = this._load.bind(this);
    this._readSettings = this._readSettings.bind(this);
  }

  _load() {
    let user_id = Number(this.state.id);
    let url = config.settings.serverPath + '/api/orders/' + user_id;
    this.setState({ isFetching: true });
    fetch(url)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        this.setState({ isFetching: false });
        return response.json();
      })
      .then(orders => {
        this.setState({ orders: orders });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    
    this._readSettings();
  }

  async _readSettings() {
    try {
      let user_id = await AsyncStorage.getItem('user_id');
      if (user_id !== null) {
        this.setState({id: user_id});
        this._load();
      }
    } catch (error) {
      console.log('## ERROR READING ITEM ##: ', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          data={this.state.orders}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight
                underlayColor='pink'
                onPress={() =>
                  this.props.navigation.navigate('Order Details', item)
                }>
                <View style={styles.orderCard}>
                  <InputWithLabel
                    label={item.order_datetime}
                    // orientation={'horizontal'}
                    textLabelStyle={styles.TextLabel}
                    textInputStyle={styles.TextInput}
                    value={'Amount: RM ' + item.total_price}
                    editable={false}/>
                </View>
              </TouchableHighlight>
            );
          }}></FlatList>
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
  container: {
    flex: 1, 
    margin: 5,
  },
  orderCard: {
    height: 100,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  TextLabel: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  TextInput: {
    fontSize: 20,
    marginTop: 10,
    color: 'gray',
    textAlign: 'right',
  },
})