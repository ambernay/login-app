import React, { useState } from 'react';
import styles from '../assets/styles';
import { Text, View, TouchableOpacity } from 'react-native';
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

  export default Login;