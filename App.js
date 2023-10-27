import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SignupForm from './components/SignupForm';

export default function App() {

  return (
    <View style={styles.body}>
      <SignupForm />
      <StatusBar style="auto" />
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
  }
});

