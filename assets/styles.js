import { StyleSheet } from 'react-native';

const brightBackground = 'tomato';
const darkText = '#29274A';
const lightText = '#839A7A';
const darkAccent = '#395C5F';
const brightAccent1 = '#E7CB52';
const brightAccent2 = '#6C994C';
const brightAccent3 = '#358283';

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
        backgroundColor: brightAccent2,
      },

      profileButton: {
        backgroundColor: 'white',
        height: '15%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        padding: 10
      },
    
      smallText: {
        color: '#395C5F',
        fontSize: 22
      }

});

export default styles;