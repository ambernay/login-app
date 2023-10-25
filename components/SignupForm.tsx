import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, 
  NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Input from './Input';

interface signupForm {
    email: string, 
    username: string, 
    password: string
}

const SignupForm: React.FC<signupForm> = () => {

    const[submitted, SetSubmitted] = useState(false);

    // const [inputValues, setInputValues] = useState<{email: String; username: String; password: String }> 
    // ({email: 'Hello', username: 'world', password: '!'});
    const [inputValues, setInputValues] = useState('Hello');

    const inputHandler = (text: string): void => {
      // return(event: React.FormEvent<HTMLInputElement>) => {
      //   setInputValues({...inputValues, [inputName]: event.target.value})
      // }
      //const { value, name } = e.target;

      setInputValues({
        ...inputValues,
        [name]: value
      });
    };

    const buttonHandler = (event: React.FormEvent) => {
      SetSubmitted(!submitted);
    }
    

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.headingText}>{inputValues.email}</Text>

            <View style={styles.formContainer}>
            {/* <TextInput style={styles.inputBox} id='email' value={inputValues} onChangeText={(newValue) => setInputValues(newValue)} placeholder="Email..."/> */}
              <Input name='email' value={inputValues.email} onChangeText={(newText) => setInputValues(newText)} placeholder="Email..."/>
              <TextInput style={styles.inputBox} id='username' placeholder="Username..."/>
              <TextInput style={styles.inputBox} id='password' placeholder="Password..."/>
              {/* vvv button vvv */}
              <TouchableOpacity style={styles.profileButton}  onPress={buttonHandler} >
                  <Text style={styles.smallText}>
                  {submitted ? 'Created' : "Create Profile"}
                  </Text>
              </TouchableOpacity>
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