import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const[submitted, SetSubmitted] = useState(false);

  const buttonHandler = () => {
    SetSubmitted(!submitted);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Sign up to Chickie Tendies</Text>

        <View style={styles.formContainer}>
          <TextInput style={styles.inputBox} placeholder="Email..."/>
          <TextInput style={styles.inputBox} placeholder="Username..."/>
          <TextInput style={styles.inputBox} placeholder="Password..."/>
          <TouchableOpacity style={styles.profileButton} onPress={buttonHandler} >
            <Text style={styles.smallText}>
              {submitted ? 'Created' : "Create Profile"}
            </Text>
          </TouchableOpacity>
          {/* <Button  onPress={buttonHandler} title={submitted ? 'Created' : "Create Profile"}/> */}
        </View>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupContainer: {
    display: 'flex',
    backgroundColor: 'white',
    height: '80%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headingText: {
    display: 'flex',
    fontSize: 20,
    color: 'white'
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '50%'
  },

  inputBox: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    height: 30,
    padding: 5
  },

  profileButton: {
    backgroundColor: 'white',
    height: '20%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallText: {
    color: 'gray',
    fontSize: 20
  }
});

