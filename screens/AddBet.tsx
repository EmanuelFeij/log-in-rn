import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import GlobalStyles from '../colors/Styles';
import {
    Center,
    Stack,
    Box,
    FormControl,
    Input,
    HStack,
    Button,
} from 'native-base';

const AddBet = ({}) => {
    return (
        <Box style={GlobalStyles.Container}>
            <View>
                <Text style={GlobalStyles.h1}>Add Bet</Text>
                <Text style={GlobalStyles.normalText}>
                    It's Time to Win a Bet
                </Text>
            </View>
            <AddBetForm />
            <Box alignItems='center'>
                <Button style={GlobalStyles.Button} onPress={() => {}}>
                    <Text style={GlobalStyles.h1}>Add Bet</Text>
                </Button>
            </Box>
        </Box>
    );
};

const AddBetForm = () => {
    return (
        <Stack mt={3} space={4} w='80%'>
            <Box p='8' borderColor='blue.50' style={styles.box}>
                <FormControl>
                    <FormControl.Label py={3}>
                        <Text style={styles.normalText}>Bet Name</Text>
                    </FormControl.Label>
                    <Input
                        size='xl'
                        w='250px'
                        color='white'
                        borderColor='white'
                        autoCorrect
                        onChangeText={(value) => {}}
                    />
                    <FormControl.Label py={3}>
                        <Text style={styles.normalText}>
                            Username To Bet Against
                        </Text>
                    </FormControl.Label>
                    <Input
                        size='xl'
                        w='250px'
                        color='white'
                        borderColor='white'
                        autoCorrect
                        onChangeText={(value) => {}}
                    />

                    <FormControl.Label py={3}>
                        <Text style={styles.normalText}>
                            Whats the Bet About
                        </Text>
                    </FormControl.Label>
                    <Input
                        size='xl'
                        w='250px'
                        color='white'
                        borderColor='white'
                        autoCorrect
                        onChangeText={(value) => {}}
                    />

                    <FormControl.Label py={3}>
                        <Text style={styles.normalText}>Reward</Text>
                    </FormControl.Label>
                    <Input
                        size='xl'
                        w='250px'
                        color='white'
                        borderColor='white'
                        autoCorrect
                        onChangeText={(value) => {}}
                        numberOfLines={3}
                    />
                </FormControl>
            </Box>
        </Stack>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        borderRadius: 10,
    },
    normalText: { fontSize: 16, color: 'white' },
    item: {
        borderColor: 'lightgrey',
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: '#333333',
    },
});

export { AddBet, AddBetForm };
