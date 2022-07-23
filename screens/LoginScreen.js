import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class LoginScreen extends Component<Props> {
  static navigationOptions = {
    title: 'First Screen',
  };

  constructor(props) {
    super(props);
    this.state = {
      aState: 0,
    };
    console.log('[+] <FirstScreen> constructor() invoked');
  }

  componentDidMount() {
    console.log('[+] <FirstScreen> componentDidMount() invoked');
  }
  componentDidUpdate() {
    console.log('[+] <FirstScreen> componentDidUpdate() invoked');
  }
  componentWillUnmount() {
    console.log('[+] <FirstScreen> componentWillUnmount() invoked');
  }
  render() {
    console.log('[+] <FirstScreen> render() invoked');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>First Screen</Text>
        <View style={styles.button}>
          <Button
            title="Go to Second Screen"
            onPress={() => {
              this.props.navigation.navigate('Sign Up');
            }}
          />
        </View>
        <Text style={styles.title}>{this.state.aState}</Text>
        <View style={styles.button}>
          <Button
            title="Update State"
            onPress={() => {
              this.setState({
                aState: this.state.aState + 1,
              });
            }}
          />
        </View>

        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Logined')}>
          <View>
            <Text>Press Me</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    margin: 10,
  },
});
