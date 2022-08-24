import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Lmeo Food Ordering System</Header>
      <Paragraph>
        Lmeo is about new twists to classic cocktails. Lmeo is the Fire that
        grills our big slabs of meat. And Lmeo is always a party!
      </Paragraph>
      {/* Login Screen */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      {/* Register Screen */}
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
}
