import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignupForm = () => {

    const[submitted, SetSubmitted] = useState(false);

    const [inputValues, setInputValues] = useState({email: 'Hello', username: 'world', password: '!'});

    const buttonHandler = () => {
      SetSubmitted(!submitted);
    }
    

    return (
        <View style={styles.pageContainer}>
        <Text style={styles.headingText}>Sign up to Chickie Tendies</Text>

        <View style={styles.formContainer}>
          <TextInput style={styles.inputBox} onChangeText={(newText) => setInputValues({...inputValues, ['email']: newText})} placeholder="Email..."/>
          <TextInput style={styles.inputBox} onChangeText={(newText) => setInputValues({...inputValues, ['username']: newText})} placeholder="Username..."/>
          <TextInput style={styles.inputBox} onChangeText={(newText) => setInputValues({...inputValues, ['password']: newText})} placeholder="Password..."/>
          <TouchableOpacity style={styles.profileButton} onPress={buttonHandler} >
            <Text style={styles.smallText}>
              {submitted ? 'Created' : "Create Profile"}
            </Text>
          </TouchableOpacity>
          {/* <Button  onPress={buttonHandler} title={submitted ? 'Created' : "Create Profile"}/> */}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({

    pageContainer: {
        width: '70%'
    },
  
    headingText: {
      display: 'flex',
      fontSize: 20,
      color: 'white',
      alignSelf: 'center'
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

export default SignupForm;