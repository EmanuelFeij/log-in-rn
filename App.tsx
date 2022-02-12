import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './screens/StackNavigator';
import Login from './screens/Login';

import React from 'react';

import { NativeBaseProvider } from 'native-base';

import { BottomNav } from './screens/BottomNav';

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name={'Login'} component={Login} />
                    <Stack.Screen name={'BottomNav'} component={BottomNav} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
