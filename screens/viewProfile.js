import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {InputWithLabel} from '../UI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this._readUser = this._readUser.bind(this);
  }

  componentDidMount() {
    this._readUser();
  }

  async _readUser() {
    try {
      let keys = await AsyncStorage.multiGet(
        ['email', 'password'],
        (err, stores) => {
          stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];
            if (['email', 'password'].indexOf(key) != -1) {
              if (key == 'email') {
                this.setState({email: value});
              } else if (key == 'password') {
                this.setState({password: value});
              }
            }
          });
        },
      );
    } catch (error) {
      console.log('## ERROR READING ITEMS ##: ', error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{paddingBottom: 50}}>
          <InputWithLabel
            textLabelStyle={styles.TextLabel}
            textInputStyle={styles.TextInput}
            label={'Email: '}
            value={this.state.email}
            orientation={'Horizontal'}
            editable={false}
          />

          <InputWithLabel
            textLabelStyle={styles.TextLabel}
            textInputStyle={styles.TextInput}
            label={'Password: '}
            value={this.state.password}
            orientation={'Horizontal'}
            secureTextEntry
            editable={false}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate('editProfile');
          }}>
          <View style={styles.btnContainer}>
            <Text style={styles.buttonTitle}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginTop: 20}}
          onPress={() => {
            this.props.navigation.reset({
              index: 0,
              routes: [{name: 'NotLogined'}],
            });
          }}>
          <View style={styles.btnContainer}>
            <Text style={styles.buttonTitle}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  TextLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  TextInput: {
    fontSize: 22,
    marginTop: 5,
    marginLeft: 10,
    color: 'gray',
  },

  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: 'pink',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
