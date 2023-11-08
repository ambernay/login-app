import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../assets/styles';
import InputField from '../components/InputField';

const SignupForm = () => {

    const[submitted, SetSubmitted] = useState(false);
    const [inputValues, setInputValues] = useState({email: '', username: '', password: ''});
    const [hidePassword, setHidePassword] = useState(true);

    const buttonHandler = () => {
      SetSubmitted(!submitted);
      console.log(inputValues);
    }
    
    return (
        <View name='pageContainer' style={[styles.container, styles.pageContainer]}>
          <Text style={styles.headingText}>Chickie Tendies</Text>

          <View style={styles.formContainer}>
            <InputField 
              onChangeText={(newText) => setInputValues({...inputValues, ['email']: newText})} 
              value={inputValues['email']}
              placeholder="Email..."
              iconName='mail'
            />
            <InputField
              onChangeText={(newText) => setInputValues({...inputValues, ['username']: newText})} 
              value={inputValues['username']}
              placeholder="Username..."
              iconName='person'
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
              style={[styles.button, styles.profileButton]} 
              onPress={buttonHandler} 
            >
              <Text style={styles.smallText}>
                {submitted ? 'Created' : "Create Profile"}
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
}

// const styles = StyleSheet.create({

//     pageContainer: {
//       height: '70%',
//       width: '70%',
//       justifyContent: 'center',
//     },
  
//     headingText: {
//       display: 'flex',
//       fontSize: 24,
//       color: 'white',
//       alignSelf: 'center'
//     },
  
//     formContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-evenly',
//       alignSelf: 'center',
//       alignItems: 'center',
//       height: '60%',
//       maxWidth: 300,
//       width: '100%'
//     },
  
//     profileButton: {
//       backgroundColor: 'white',
//       height: '15%',
//       width: '60%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 15,
//       padding: 10
//     },
  
//     smallText: {
//       color: '#395C5F',
//       fontSize: 22
//     }
//   });

export default SignupForm;