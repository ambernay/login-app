import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const InputField = ({ placeholder, isPassword, hidePassword, setHidePassword, iconName, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <IonIcon
                name={iconName}
                style={[styles.icon, styles.leftIcon]}
            />
            <TextInput
                style={styles.inputBox}
                autoCorrect={false}
                autoCapitalize='none'
                placeholderTextColor= '#839A7A'
                //vv props vv
                placeholder={placeholder}
                isPassword={isPassword}
                hidePassword={hidePassword}
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
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        marginTop: 15 
      },
  
    inputBox: {
        flex: 1,
        backgroundColor: 'white',
        color: '#395C5F',
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        height: 30,
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 15,
        paddingBottom: 15
    },

    icon: {
        top: 0,
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