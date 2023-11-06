import { Stack } from 'expo-router';

export default function Layout(){
    return(
        <Stack screenOptions= {{
            headerStyle: {
                backgroundColor: 'mint'
            },
            headerTintColor: 'tomato',
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }}
        />
    )
}