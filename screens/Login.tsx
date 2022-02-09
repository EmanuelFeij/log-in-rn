import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import GlobalStyles from '../colors/Styles';

import { Button, Box } from 'native-base';

import { Options, FormInfo } from './StackNavigator';
import LoginForm from './LoginForm';

type LoginProps = NativeStackScreenProps<Options, 'Login'>;

export default function Login({ navigation }: LoginProps) {
    const [rememberChecked, setRememberChecked] = useState(false);
    const [formInfo, setFormInfo] = useState<FormInfo>({
        name: '',
        password: '',
    });

    const handleSignUpButton = () => {
        if (formInfo.name !== '' && formInfo.password !== '') {
            navigation.navigate('Inside', formInfo);
        }
    };

    return (
        <View style={GlobalStyles.Container}>
            <View>
                <Text style={GlobalStyles.h1}>Welcome</Text>
                <Text style={GlobalStyles.normalText}>
                    Hi it's time for you to sign in.
                </Text>
            </View>
            <LoginForm
                setFormInfo={setFormInfo}
                rememberChecked={rememberChecked}
                setRememberChecked={setRememberChecked}
            />

            <Box alignItems='center'>
                <Button
                    style={GlobalStyles.Button}
                    onPress={handleSignUpButton}>
                    <Text style={GlobalStyles.h1}>Sign Up</Text>
                </Button>
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({});
