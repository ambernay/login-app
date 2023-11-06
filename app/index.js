import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { Link } from 'expo-router';
import App from '../App';

export default function Page() {
  return (
    <View style={styles.body}>
      <App/>
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
