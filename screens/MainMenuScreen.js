import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import categories from '../consist/categories';
import MenuData from './MenuData';
let SQLite = require('react-native-sqlite-storage');

// const MainMenuScreen = () => {
//   const MenuCard = ({ item }) => {
//     return (
//       <ScrollView style={styles.menuCard}>
//         <Image source={item.image} style={{ height: 80, width: 90 }} />
//         <View
//           style={{
//             height: 100,
//             marginLeft: 10,
//             paddingVertical: 20,
//             flex: 1,
//           }}>
//           <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
//           <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.price}</Text>
//         </View>
//       </ScrollView>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={styles.header}></View>
//       <FlatList
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 80 }}
//         data={MenuData}
//         renderItem={({ item }) => <MenuCard item={item} />}
//       />
//     </SafeAreaView>
//   );
// };

// const MainMenuScreen = () => (
//   <MenuScreen />
// );

export default class MainMenuScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menu: [],
  //   };
  //   this._query = this._query.bind(this);
  //   this.db = SQLite.openDatabase(
  //     { name: 'MenuData', createFromLocation: '~db.sqlite' },
  //     this.openCallback,
  //     this.errorCallback,
  //   );
  // }
  // componentDidMount() {
  //   this._query();
  // }
  // _query() {
  //   this.db.transaction(tx =>
  //     tx.executeSql('SELECT * FROM MenuData ORDER BY id', [], (tx, results) =>
  //       this.setState({menu: results.rows.raw()}),
  //     ),
  //   );
  // }
  // openCallback() {
  //   console.log('Database open successfully');
  // }
  // errorCallback(err) {
  //   console.log('Error in opening the database: ' + err);
  // }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ paddingBottom: 80 }}
          data={MenuData}//data={this.state.menu} 
          //extraData={this.state}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => {
            <TouchableHighlight
              underlayColor="gray"
              onPress={() => {
                this.props.navigation.navigate('FoodDetailScreen', {
                  id: item.id,
                  headerTitle: item.name,
                  refresh: this._query,
                });
              }}>
              <Image source={item.image} style={{ height: 80, width: 90 }} />
              <View style={styles.menuCard}>
                <Text style={styles.menuTitle}>{item.name}</Text>
                <Text style={styles.menuTitle}>{item.price}</Text>
              </View>
            </TouchableHighlight>
          }}
          keyExtractor={item => {
            item.id.toString();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  menuCard: {
    height: 110,
    // elevation:15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  // menu: {
  //   height: 100,
  //   marginLeft: 10,
  //   paddingVertical: 20,
  //   flex: 1,
  // },
  menuTitle: {
    fontWeight: 'bold', 
    fontSize: 16 
  },
});

// export default MainMenuScreen;