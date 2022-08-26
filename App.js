/**
 * @author 		Group 9
 * @author    Chee Jia Sheng 1902941
 * @author    Cheok Jia Le 1901880
 * @author    Tong Wei Ling 1901268
 * @author    Lee Yi Tien 1904896
 * @author		Yang Chu Yan 2005912
 * 
 *
 * @description This system aims to digitalize the food ordering process.
 *				The customer will have to create an account for the app.
 *				The customer can view the digital menu and make order,
 * 				but they will have to pay at the counter.
 * 				The cusotmer can view his/her order history.
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import CartScreen from './screens/CartScreen';
import viewProfile from './screens/viewProfile';
import editProfile from './screens/editProfile';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';

const MainStack = createStackNavigator();
const NotLoginedStack = createStackNavigator();
const LoginedDrawer = createDrawerNavigator();
const MainMenuTab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const OrderHistoryStack = createStackNavigator();

class NotLoginedStackScreen extends Component {
  render() {
    return (
      <NotLoginedStack.Navigator>
        <NotLoginedStack.Screen name="Login" component={LoginScreen} />
        <NotLoginedStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
      </NotLoginedStack.Navigator>
    );
  }
}

class LoginedDrawerScreen extends Component {
  render() {
    return (
      <LoginedDrawer.Navigator>
        <LoginedDrawer.Screen name="Homepage" component={MainMenuTabScreen} />
        <LoginedDrawer.Screen name="Profile" component={ProfileStackScreen} />
        <LoginedDrawer.Screen
          name="Order History"
          component={OrderHistoryStackScreen}
        />
      </LoginedDrawer.Navigator>
    );
  }
}

class MainMenuTabScreen extends Component {
   render() {
     return (
       <MainMenuTab.Navigator>
         <MainMenuTab.Screen 
          name="MainMenu" 
          component={MainMenuScreen}
          options ={{
            tabBarIcon: () => {return <Ionicons name="home" size={20}/>}
          }} />
         <MainMenuTab.Screen name="Cart" 
         // options={{unmountOnBlur: true}}
         component={CartScreen} 
         options ={{
          tabBarIcon: () => {return <Ionicons name="cart" size={20}/>}
        }} />
       </MainMenuTab.Navigator>
     );
   }
 }

class ProfileStackScreen extends Component {
  render() {
    return (
      <ProfileStack.Navigator initialRouteName="viewProfile">
        <ProfileStack.Screen
          options={{headerShown: false}}
          name="viewProfile"
          component={viewProfile}
        />
        <ProfileStack.Screen
          options={{headerShown: false}}
          name="editProfile"
          component={editProfile}
        />
      </ProfileStack.Navigator>
    );
  }
}

class OrderHistoryStackScreen extends Component {
  render() {
    return (
      <OrderHistoryStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Order History">
        <OrderHistoryStack.Screen
          name="Order History"
          component={OrderHistoryScreen}
        />
        <OrderHistoryStack.Screen
          name="Order Details"
          component={OrderDetailsScreen}
        />
      </OrderHistoryStack.Navigator>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', // Accessed by login screen, change password screen, cart screen
      password: '', // Accessed by login screen, change password screen
      cartItems: [
        {
          foodIndex: 0,
          quantity: 1,
        },
        {
          foodIndex: 1,
          quantity: 2,
        },
      ],
    };
  }

  render() {
    return (
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen
            name="NotLogined"
            component={NotLoginedStackScreen}
          />
          <MainStack.Screen name="Logined" component={LoginedDrawerScreen} />
          {/* <MainStack.Screen
            name="Order Details"
            component={OrderDetailsScreen}
          /> */}
          <MainStack.Screen name="Food Details" component={FoodDetailScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}
