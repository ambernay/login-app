import React, { FC } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
    name: String;
    value: String;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
    return (
        <TextInput style={styles.inputBox} name={props.name} value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText}  />
    )
}

const styles = StyleSheet.create({
  
    inputBox: {
      backgroundColor: 'white',
      borderColor: '#ddd',
      borderWidth: 1,
      width: '100%',
      height: 30,
      padding: 5
    },
  });

  export default Input;