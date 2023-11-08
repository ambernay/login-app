import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../assets/styles';
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
                placeholderTextColor= {styles.lightText}
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

export default InputField;