import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
    } else {
      try {
        var user = {
          Email: this.state.email.value,
          Password: this.state.email.password,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        this.props.navigation.navigate('LoginScreen');
      } catch (error) {
        console.log(error);
      }
    }
  };
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
            onPress={() => this.props.navigation.replace('LoginScreen')}>
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
