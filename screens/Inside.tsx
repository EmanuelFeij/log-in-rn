import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Options } from './StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, Box } from 'native-base';
import GlobalStyles from '../colors/Styles';

type InsideProps = NativeStackScreenProps<Options, 'Inside'>;

const Inside = ({ navigation, route }: InsideProps) => {
    const options = route.params;

    const handleToTop = () => {
        navigation.popToTop();
    };

    return (
        <View style={GlobalStyles.Container}>
            <Text style={GlobalStyles.h1}>Inside App Screen</Text>
            <Text style={GlobalStyles.normalText}>
                {options.name} {options.password}
            </Text>
            <Box alignItems='center'>
                <Button style={GlobalStyles.Button} onPress={handleToTop}>
                    <Text style={GlobalStyles.h1}>Log Out</Text>
                </Button>
            </Box>
        </View>
    );
};

export default Inside;

const styles = StyleSheet.create({});
