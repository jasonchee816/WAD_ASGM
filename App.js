import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableHighlight} from 'react-native-gesture-handler';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';

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
        <NotLoginedStack.Screen name="Sign Up" component={SignUpScreen} />
      </NotLoginedStack.Navigator>
    );
  }
}

class LoginedDrawerScreen extends Component {
  render() {
    return (
      <LoginedDrawer.Navigator>
        <LoginedDrawer.Screen name="Homepage" component={MainMenuTabScreen} />
        <LoginedDrawer.Screen name="Profile" component={ProfileScreen} />
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
        <MainMenuTab.Screen name="MainMenu" component={MainMenuScreen} />
        <MainMenuTab.Screen name="Cart" component={CartScreen} />
      </MainMenuTab.Navigator>
    );
  }
}

class ProfileStackScreen extends Component {
  render() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        <ProfileStack.Screen
          name="Change Password"
          component={ChangePasswordScreen}
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
      aState: 0,
    };
    // console.log('[+] <FirstScreen> constructor() invoked');
  }

  // componentDidMount() {
  //   console.log('[+] <FirstScreen> componentDidMount() invoked');
  // }

  // componentDidUpdate() {
  //   console.log('[+] <FirstScreen> componentDidUpdate() invoked');
  // }

  // componentWillUnmount() {
  //   console.log('[+] <FirstScreen> componentWillUnmount() invoked');
  // }

  render() {
    // console.log('[+] <FirstScreen> render() invoked');
    return (
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen name="NotLogined" component={NotLoginedStackScreen} />
          <MainStack.Screen name="Logined" component={LoginedDrawerScreen} />
		      <MainStack.Screen name="Cart" component={CartScreen} />
		      <MainStack.Screen name="Order Details" component={OrderDetailsScreen} />
		  {/* <MainStack.Screen name="Food Details" component={FoodDetailScreen} /> */}
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 20,
//   },
//   button: {
//     margin: 10,
//   },
// });
