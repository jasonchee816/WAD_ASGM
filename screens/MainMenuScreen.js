import React, { Component, useState } from "react";
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
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import categories from '../consist/categories';
import foods from '../screens/MenuData';

const MenuScreen = () => {
  const MenuCard = ({ item }) => {
    return (
      <ScrollView contentContainerStyle={styles.menuCard}>
        <Image source={item.image} style={{ height: 80, width: 90 }} />
        <View style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.price}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>

      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={MenuData}
        renderItem={({ item }) => <MenuCard item={item} />}
      />
    </SafeAreaView>
  )
}

const HomeScreen = () => {
  return (
    <MenuScreen />

  )
}


const styles = StyleSheet.create({
  header: {

  },
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
});

export default HomeScreen;