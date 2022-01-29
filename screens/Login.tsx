import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ColorsDarkTheme } from '../colors/Colors';
import GlobalStyles from '../colors/Styles';

import { Container, Button } from 'native-base';

import { Options } from './StackNavigator';
import LoginForm from './LoginForm';

type LoginProps = NativeStackScreenProps<Options, 'Login'>;

export default function Login({ navigation }: LoginProps) {
    const [rememberChecked, setRememberChecked] = useState(false);

    const handleSignUpButton = () => navigation.navigate('SignUp');
    const handleLoginButton = () =>
        navigation.navigate('Inside', {
            userName: 'emanuel',
            age: 29,
            email: 'a',
        });

    return (
        <Container style={GlobalStyles.Container}>
            <View>
                <Text style={GlobalStyles.h1}>Welcome</Text>
                <Text style={GlobalStyles.normalText}>
                    Hi it's time for you to sign in.
                </Text>
            </View>
            <LoginForm
                rememberChecked={rememberChecked}
                setRememberChecked={setRememberChecked}
            />

            <View>
                <Button
                    style={GlobalStyles.Button}
                    onPress={handleSignUpButton}
                    bordered
                    dark>
                    <Text style={GlobalStyles.h1}>Sign Up</Text>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({});
