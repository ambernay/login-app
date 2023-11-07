import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignupForm from './app/SignupForm';

export default function App() {

  return (
    <View style={styles.body}>
      <SignupForm />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({

  body: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

