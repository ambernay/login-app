import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import 'expo-router/entry';
import { Link } from 'expo-router';
// import App from '../App';

export default function Page() {
  return (
    <View style={styles.body}>
      <Text>Chickie Tendies Landing Page</Text>
      <Link href='login'>Log In</Link>
      <Link href='signup_form'>Sign Up</Link>
    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
