import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Options } from './StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Button, Text } from 'native-base';
import GlobalStyles from '../colors/Styles';

type LoginProps = NativeStackScreenProps<Options, 'Login'>;

const SignUp = ({ navigation }: LoginProps) => {
    const handleInsideButton = () =>
        navigation.navigate('Inside', {
            userName: 'emanuel',
            age: 29,
            email: 'a',
        });
    const handleToTop = () => {
        navigation.popToTop();
    };
    return (
        <Container style={GlobalStyles.Container}>
            <Text style={GlobalStyles.h1}>SignUp Screen</Text>
            <View style={styles.buttonContainer}>
                <View>
                    <Button
                        style={{ ...GlobalStyles.Button, paddingVertical: 50 }}
                        onPress={handleInsideButton}>
                        <Text style={GlobalStyles.normalText}>Inside</Text>
                    </Button>
                </View>
                <View>
                    <Button style={GlobalStyles.Button} onPress={handleToTop}>
                        <Text style={GlobalStyles.normalText}>LogOut</Text>
                    </Button>
                </View>
            </View>
        </Container>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    buttonContainer: {
        height: 110,
        justifyContent: 'space-between',
    },
});
