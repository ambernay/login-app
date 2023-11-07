import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import { Link } from 'expo-router';

const Login = () => {

    const [inputValues, setInputValues] = useState({email: '', password: ''});
    const [hidePassword, setHidePassword] = useState(true);

    const buttonHandler = () => {
      console.log(inputValues);
    }

    return (
        <View name='pageContainer' style={styles.pageContainer}>
            <Text style={styles.headingText}>Chickie Tendies</Text>

            <View style={[styles.container, styles.formContainer]}>
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
                style={[styles.button, styles.loginButton]} 
                onPress={buttonHandler} 
              >
                <Text style={styles.smallText}>Log In</Text>
              </TouchableOpacity>

              <View style={[styles.container, styles.signUpContainer]}>
              <TouchableOpacity 
                style={[styles.button, styles.signupButton]} 
                onPress={buttonHandler} 
              >
                <Link style={styles.smallText} href='signup_form'>Sign Up</Link>
              </TouchableOpacity>
            </View>
            {/* vv formContainer vv */}
          </View>
          {/* vv pageContainer vv */}
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

    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 15,
      alignSelf: 'center',
      alignItems: 'center',
      width: '100%'
    },
  
    formContainer: {
      rowGap: 15,
      height: '60%',
      maxWidth: 300,
      width: '100%',
      paddingTop: 40
    },
    
    signUpContainer: {
      height: '40%',
      borderTopColor: '#395C5F',
    },
  
    button: {
      borderRadius: 20,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      padding: 10
    },

    loginButton: {
      width: '100%',
      backgroundColor: 'white',
    },

    signupButton: {
      width: '50%',
      backgroundColor: '#6C994C',
    },
  
    smallText: {
      color: '#395C5F',
      fontSize: 22
    }
  });

  export default Login;