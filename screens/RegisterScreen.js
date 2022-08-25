import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {checkEmailValidity} from '../helpers/checkEmailValidity';
import {passwordValidator} from '../helpers/passwordValidator';
import AsyncStorage from '@react-native-async-storage/async-storage';
let config = require('../Config');

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        value2: '',
        error: '',
      },
    };
    this.onSignUpPressed = this.onSignUpPressed.bind(this);
    // this._CheckExistingMember = this._CheckExistingMember.bind(this);
    this._InsertIntoMember = this._InsertIntoMember.bind(this);
  }
  // error control on name, email and password
  onSignUpPressed = async () => {
    // if validator got pass the parameter insdie
    const emailError = checkEmailValidity(this.state.email.value);
    const passwordError = passwordValidator(
      this.state.password.value,
      this.state.password.value2,
    );
    if (emailError || passwordError) {
      let newEmail = {...this.state.email, error: emailError};
      this.setState({email: newEmail});

      let newPassword = {...this.state.password, error: passwordError};
      this.setState({password: newPassword});
      return;
    }
    this._InsertIntoMember();
  };
  // _CheckExistingMember() {
  //   let url = config.settings.serverPath + '/api/Checkmember';

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email.value,
  //     }),
  //   })
  //     .then(response => {
  //       console.log(response.json());
  //       if (Object.keys(response.json()).length > 0) {
  //         Alert.alert('Existing acc detected');
  //         this.props.navigation.navigate('LoginScreen');
  //         throw Error('Error ' + response.status);
  //       } else {
  //         this._InsertIntoMember();
  //         Alert.alert('Account Successfully Created!');
  //       }
  //     })

  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  _InsertIntoMember() {
    let url = config.settings.serverPath + '/api/Insertmember';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email.value,
        password: this.state.password.value,
      }),
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error when inserting data!');
          throw Error('Error ' + response.status);
        }
        return response.json();
      })
      .then(respondJson => {
        if (respondJson.affected > 0) {
          Alert.alert(
            'Account succussfully created for ',
            this.state.email.value,
          );
        } else {
          Alert.alert('Error in SAVING');
        }
        // this.props.route.params._refresh();
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Background>
        <BackButton goBack={this.props.navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={text => {
            let newEmail = {...this.state.email, value: text};
            this.setState({email: newEmail});
          }}
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={this.state.password.value}
          onChangeText={text => {
            let newPassword = {...this.state.password, value: text};
            this.setState({password: newPassword});
          }}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />
        <TextInput
          label="Re-Password"
          returnKeyType="done"
          value={this.state.password.value2}
          onChangeText={text => {
            let newPassword2 = {...this.state.password, value2: text};
            this.setState({password: newPassword2});
          }}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={this.onSignUpPressed}
          style={{marginTop: 24}}>
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
