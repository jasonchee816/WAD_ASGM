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
import {BackButton} from '../UI';
let SQLite = require('react-native-sqlite-storage');

export default class FoodDetailScreen extends Component {
  constructor(props) {
    super(props);
    const item = this.props.route.params;
    this.state = {
      item_id: item.id,
      quantity: '1',
    }
    this.db = SQLite.openDatabase(
      {name: 'cartdb', createFromLocation: '~db.sqlite'},
      this.openDb,
      this.errorDb,
    )
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this._insert = this._insert.bind(this);
  }

  componentDidMount(){
    this.props.navigation.setOptions({headerTitle: this.state.item_id})
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

  _insert() {
    this.db.transaction(tx => {
      tx.executeSql('INSERT INTO cart_items(item_id, quantity) VALUES (?,?)',
      [this.state.item_id, this.state.quantity])
    })
    this.props.navigation.goBack();
    // console.log(this.state.item_id, this.state.quantity)
  }

  openDb() {
    console.log('Database opened successfully!')
  }

  closeDb() {
    console.log('SQL Error: ' + err)
  }

  render() {
    const item = this.props.route.params;
    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
      <BackButton title="Details" onPress={this.props.navigation.goBack}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuDetailImageContainer}>
          <Image source={item.image} style={styles.image} />
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
              onPress={this._insert}>
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
  image: {
    height: 220,
     width: 220,
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
