import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FoodDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '1',
    }
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
  }
  
  addOne = () =>{
    this.setState({
      quantity: (Number(this.state.quantity) + Number(1)).toString(),
    })
  }
  removeOne = () =>{
    this.setState({
      quantity: Math.max((Number(this.state.quantity) - Number(1)).toString(), 0),
    })

  }
  render() {
    const item = this.props.route.params;
    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Ionicons name='chevron-back-circle' size={40} color='pink' onPress={this.props.navigation.goBack} />
        <Text style={styles.detailsTitleStyle}> Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuDetailImageContainer}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.menuDetailNameContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.desc}>{item.desc}</Text>

          {/* Button Container */}
          <View style={styles.AddToCartButtonContainer}>

            <View style={styles.addButton}>
              <Ionicons
                name="remove"
                size={40}
                color='pink'
                onPress={this.removeOne}
              />
            </View>
            <Text style={styles.quantityStyle}>{this.state.quantity}</Text>
            <View style={styles.addButton}>
                <Ionicons
                  name="add"
                  size={40}
                  color='pink'
                  onPress={this.addOne}
                />
              </View>

            </View>

            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() => {
                // cartItems={this.state.cartItems}
                // quantity = this.state.quantity
                // foodIndex = item.id
                // let cartItem = this.props.route.params.item.id
                // this.setState({
                //   foodIndex: this.state.cartItems[cartItem].foodIndex,
                //   quantity: this.state.cartItems[cartItem].quantity
                // })
                this.props.navigation.goBack
              }}>
              <View style={styles.btnContainer}>
                <Text style={styles.buttonTitle}>Add To Cart</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  detailsTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuDetailImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'pink',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  menuDetailNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  desc: {
    fontSize: 20,
    color: 'white',
    lineHeight: 22,
    marginTop: 10,
  },
  AddToCartButtonContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantityStyle:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  addButton: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 18
},
  btnContainer: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
})
