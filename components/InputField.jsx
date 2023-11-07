import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const InputField = ({ placeholder, isPassword, hidePassword, setHidePassword, iconName, onChangeText, value }) => {
    
    return (
        <View style={styles.inputContainer}>
            <IonIcon
                name={iconName}
                style={[styles.icon, styles.leftIcon]}
            />
            <TextInput
                secureTextEntry={hidePassword}
                style={styles.inputBox}
                type='text'
                autoCorrect={false}
                autoCapitalize='none'
                placeholderTextColor= '#839A7A'
                //vv props vv
                value={value}
                placeholder={placeholder}
                isPassword={isPassword}
                onChangeText={onChangeText}
            />
            {isPassword &&(
                <IonIcon
                    name={hidePassword ? 'eye-off' : 'eye'}
                    style={[styles.icon, styles.rightIcon]}
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
        height: 38,
        width: '100%',
        justifyContent: 'center'
      },
  
    inputBox: {
        flex: 1,
        backgroundColor: 'white',
        color: '#395C5F',
        fontSize: 22,
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        height: 'inherit',
        paddingLeft: 35,
        paddingRight: 35,
    },

    icon: {
        top: '15%',
        position: 'absolute',
        zIndex: 1,
        color:'#839A7A',
        fontSize: 24,
    },

    leftIcon: {
        left: 2,
    },
    rightIcon: {
        right: 2,
    }
  });

export default InputField;