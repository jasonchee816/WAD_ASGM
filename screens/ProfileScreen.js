import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderHistoryScreen from './OrderHistoryScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import CartScreen from './CartScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// class MyStack extends Component {
//   render() {
//     return (
//       <Stack.Navigator initialRouteName="ChangePassword">
//         <Stack.Screen
//           name="ChangePassword"
//           component={ChangePasswordScreen}></Stack.Screen>
//         <Stack.Screen
//           name="First"
//           component={OrderHistoryScreen}></Stack.Screen>
//       </Stack.Navigator>
//     );
//   }
// }

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'First';

  switch (routeName) {
    case 'First':
      return 'First feed';
    case 'Profile':
      return 'My profile';
    case 'Animal':
      return 'Animal';
  }
}

function getTabBarVisible(route) {
  const routeName = getHeaderTitle(route);

  if (routeName === 'Animals') {
    return false;
  }
  return true;
}

Tab.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == 'Animal') {
    tabBarVisible = false;
  }

  return {tabBarVisible};
};

export default class ProfileScreen extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeBackgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Home"
          component={CartScreen}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="home" size={20} color="red"></Ionicons>;
            },
          }}></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ChangePasswordScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Ionicons name="man" size={20} color="blue"></Ionicons>;
            },
          }}
          // options={({route}) => ({
          //   tabBarVisible: getTabBarVisible(route),
          // })}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
}
