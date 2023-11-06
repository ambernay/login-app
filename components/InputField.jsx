import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const InputField = ({ placeholder, isPassword, hidePassword, setHidePassword, iconName }) => {
    return (
        <View style={styles.inputContainer}>
            <IonIcon
                name={iconName}
                style={styles.leftIcon}
            />
            <TextInput
                style={styles.inputBox}
                autoCorrect={false}
                autoCapitalize='none'
                //vv props vv
                placeholder={placeholder}
                isPassword={isPassword}
                hidePassword={hidePassword}
            />
            {isPassword &&(
                <IonIcon
                    name={hidePassword ? 'eye-off' : 'eye'}
                    style={styles.rightIcon}
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        marginTop: 15 
      },
  
    inputBox: {
      backgroundColor: 'white',
      borderColor: '#ddd',
      borderWidth: 1,
      width: '100%',
      height: 30,
      paddingLeft: 30
    },

    leftIcon: {
        left: 2,
        top: -3,
        position: 'absolute',
        zIndex: 1,
        color:'gray',
        fontSize: 24,
    },
    rightIcon: {
        right: 2,
        top: -3,
        position: 'absolute',
        zIndex: 1,
        color:'gray',
        fontSize: 24,
    }
  });

export default InputField;