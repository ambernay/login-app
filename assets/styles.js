import { StyleSheet } from 'react-native';

//#region colors 
    const brightBackground = 'tomato';
    const darkText = '#29274A';
    const lightText = '#839A7A';
    const darkAccent = '#395C5F';
    const brightAccent1 = '#E7CB52';
    const brightAccent2 = '#6C994C';
    const brightAccent3 = '#358283';
//#endregion
//#region sizes 
    const headingText = 24;
    const smallText = 22;
    const iconSidePosition = 2;
//#endregion

const styles = StyleSheet.create({


    pageContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: brightBackground
      },
    
    //#region texts 

        headingText: {
                display: 'flex',
                fontSize: headingText,
                color: 'white',
                alignSelf: 'center'
            },

            smallText: {
                color: darkText,
                fontSize: smallText
            },

    //#endregion
  
    //#region containers 

        container: {
                display: 'flex',
                flexDirection: 'column',
                rowGap: 15,
                alignSelf: 'center',
                alignItems: 'center',
                width: '100%'
            },
            
            formContainer: {
                height: '60%',
                maxWidth: 300,
                width: '100%',
                paddingTop: 40
            },
            
            signUpContainer: {
                height: '40%',
                borderTopColor: darkAccent,
            },

        //#endregion
    
    //#region buttons 

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
                width: '60%',
            },

        //#endregion

    //#region inputField 

    inputContainer: {
            height: 38,
            width: '100%',
            justifyContent: 'center'
        },
    
        inputBox: {
            flex: 1,
            backgroundColor: 'white',
            color: darkAccent,
            fontSize: smallText,
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
            color: lightText,
            fontSize: headingText,
        },

        leftIcon: {
            left: iconSidePosition,
        },
        rightIcon: {
            right: iconSidePosition,
        }

    //#endregion

});

export default styles;