import React, {Component} from 'react';
import {Text, View} from 'react-native';
import OrderHistoryScreen from './OrderHistoryScreen';
import SignUpScreen from './SignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

// class MyStack extends Component {
//   render() {
//     return (
//       <Stack.Navigator initialRouteName="OrderHistory">
//         <Stack.Screen
//           name="OrderHistory"
//           component={OrderHistoryScreen}></Stack.Screen>
//         <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
//       </Stack.Navigator>
//     );
//   }
// }

export default class ChangePasswordScreen extends Component {
  render() {
    return (
      // <NavigationContainer independent={true}>
      <Stack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={OrderHistoryScreen}></Stack.Screen>
        <Stack.Screen
          name="Animal"
          component={SignUpScreen}
          // options={({route}) => ({
          //   tabBarVisible: this.getTabBarVisibility(route),})}
        ></Stack.Screen>
      </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
