import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  navigation,
  Alert,
} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {checkEmailValidity} from '../helpers/checkEmailValidity';
import {LoginValidator} from '../helpers/LoginValidator';
import AsyncStorage from '@react-native-async-storage/async-storage';
let config = require('../Config');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
      user_id: '',
    };
    this.onLoginPressed = this.onLoginPressed.bind(this);
    this._save = this._save.bind(this);
  }
  onLoginPressed() {
    const emailError = checkEmailValidity(this.state.email.value);
    const passwordError = LoginValidator(this.state.password.value);
    if (emailError || passwordError) {
      let newEmail = {...this.state.email, error: emailError};
      this.setState({email: newEmail});

      let newPassword = {...this.state.email, error: passwordError};
      this.setState({password: newPassword});
      return;
    }
    this._save();
  }
  async_saveSettings = async () => {
    try {
      await AsyncStorage.multiSet([
        ['email', this.state.email.value.toString()],
        ['password', this.state.password.value.toString()],
        ['user_id', this.state.user_id.toString()],
      ]);
    } catch (error) {
      console.log('## ERROR SAVING EMAIL ##: ', error);
    }
  };
  _save = async () => {
    let url = config.settings.serverPath + '/api/member';

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
        if (!response.ok) {
          Alert.alert('Error Requesting');
          throw Error('Error ' + response.status);
        }

        return response.json();
      })
      .then(respondJson => {
        if (respondJson === null) {
          Alert.alert('Email or Password Wrong!');
        } else {
          this.setState({user_id: respondJson.user_id});
          this.async_saveSettings();
          this.props.navigation.navigate('Logined');
        }
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  };
  render() {
    return (
      <Background>
        {/* Move back to the previous stack */}
        <BackButton goBack={this.props.navigation.goBack} />
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={text => {
            let newEmail = {...this.state.email, value: text};
            this.setState({email: newEmail});
          }}
          //cast to boolean
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          //let the keyboard know what r u typing
          autoCompleteType="email"
          textContentType="emailAddress"
          //determine which keyboard to pen
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
          // ***
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          {/* lower the opacity */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={this.onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
