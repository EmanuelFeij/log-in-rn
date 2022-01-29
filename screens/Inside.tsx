import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Options } from './StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Button, Text } from 'native-base';
import GlobalStyles from '../colors/Styles';

type InsideProps = NativeStackScreenProps<Options, 'Inside'>;

const Inside = ({ navigation, route }: InsideProps) => {
    const options = route.params;

    const handleToTop = () => {
        navigation.popToTop();
    };

    return (
        <Container style={GlobalStyles.Container}>
            <Text style={GlobalStyles.h1}>Inside App Screen</Text>
            <Text style={GlobalStyles.normalText}>
                {options.userName} {options.age} {options.email}
            </Text>
            <View>
                <Button style={GlobalStyles.Button} onPress={handleToTop}>
                    <Text style={GlobalStyles.normalText}>LogOut</Text>
                </Button>
            </View>
        </Container>
    );
};

export default Inside;

const styles = StyleSheet.create({});
