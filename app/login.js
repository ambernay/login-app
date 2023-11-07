import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import { Link } from 'expo-router';

const Login = () => {

    const [inputValues, setInputValues] = useState({email: '', username: '', password: ''});
    const [hidePassword, setHidePassword] = useState(true);

    const buttonHandler = () => {
      console.log(inputValues);
    }

    return (
        <View name='pageContainer' style={styles.pageContainer}>
            <Text style={styles.headingText}>Chickie Tendies</Text>
            <Text style={styles.headingText}>Sign Up</Text>

            <View style={styles.formContainer}>
            <InputField 
              onChangeText={(newText) => setInputValues({...inputValues, ['email']: newText})} 
              value={inputValues['email']}
              placeholder="Email..."
              iconName='mail'
            />
            <InputField
              value={inputValues['password']} 
              onChangeText={(newText) => setInputValues({...inputValues, ['password']: newText})} 
              placeholder="Password..."
              iconName='lock-closed'
              textContentType={'password'}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              isPassword={true}
            />
            <TouchableOpacity 
              style={styles.profileButton} 
              onPress={buttonHandler} 
            >
              <Text style={styles.smallText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({

    pageContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: 'tomato'
    },
  
    headingText: {
      display: 'flex',
      fontSize: 24,
      color: 'white',
      alignSelf: 'center'
    },
  
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 15,
      alignSelf: 'center',
      alignItems: 'center',
      height: '60%',
      maxWidth: 300,
      width: '100%',
      paddingTop: 40
    },
  
    profileButton: {
      backgroundColor: 'white',
      borderRadius: 25,
      height: 45,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      padding: 10
    },
  
    smallText: {
      color: '#395C5F',
      fontSize: 22
    }
  });

  export default Login;