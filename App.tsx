import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './screens/StackNavigator';
import Login from './screens/Login';
import Inside from './screens/Inside';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NativeBaseProvider } from 'native-base';

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
                    <Stack.Screen name={'Inside'} component={Inside} />
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
