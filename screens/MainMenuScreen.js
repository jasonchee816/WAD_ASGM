import React, { Component } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import MenuData from '../screens/MenuData';

export default class MainMenuScreen extends Component {
  MenuCard = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor='pink'
        onPress={() => {
          this.props.navigation.navigate('Food Details', item);
        }}>
      <ScrollView contentContainerStyle={styles.menuCard}>
        <Image source={item.image} style={{ height: 80, width: 90 }} />
        <View style={styles.namepriceContainer}>
          <Text style={styles.menuTitle}>{item.name}</Text>
          <Text style={styles.menuTitle}>RM {item.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      </TouchableHighlight>
    );
  };
  render(){
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={MenuData}
        renderItem={this.MenuCard}
      />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  menuCard: {
    height: 110,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  namepriceContainer:{
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});