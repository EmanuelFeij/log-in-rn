import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GlobalStyles from '../colors/Styles';
import { Box, Button } from 'native-base';

const About = ({}) => {
    return (
        <View style={GlobalStyles.Container}>
            <Text style={GlobalStyles.normalText}>About</Text>
            <Box>
                <Button style={GlobalStyles.Button}>
                    <Text style={GlobalStyles.h1}>Logout</Text>
                </Button>
            </Box>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({});
