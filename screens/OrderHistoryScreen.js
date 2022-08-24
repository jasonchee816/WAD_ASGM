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
} from 'react-native';
import {InputWithLabel} from '../UI';

let config = require('../Config');

export default class OrderHistoryScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isFetching: false,
    };
    this._load = this._load.bind(this);
  }

  _load() {
    let url = config.settings.serverPath + '/api/orders/' + 3;
    this.setState({isFetching: true});
    fetch(url)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        this.setState({isFetching: false});
        return response.json();
      })
      .then(orders => {
        this.setState({orders: orders});
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this._load();
  }

  render() {
    return (
      <View style={{flex: 1, margin: 5}}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          data={this.state.orders}
          renderItem={({item}) => {
            return (
              <TouchableNativeFeedback
                onPress={() =>
                  this.props.navigation.navigate('Order Details', item)
                }>
                <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                  <InputWithLabel
                    label={item.order_datetime}
                    // orientation={'horizontal'}
                    textLabelStyle={{fontSize: 20}}
                    textInputStyle={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'right',
                    }}
                    value={'Amount: RM' + item.total_price}
                    editable={false}></InputWithLabel>
                </View>
              </TouchableNativeFeedback>
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
