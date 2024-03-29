import { StyleSheet } from 'react-native';
import React from 'react';
import {
    Text,
    Input,
    VStack,
    FormControl,
    Center,
    Box,
    Stack,
    HStack,
    Switch,
} from 'native-base';
import { FormInfo } from './StackNavigator';

type LoginFormProps = {
    rememberChecked: boolean;
    setRememberChecked: React.Dispatch<React.SetStateAction<boolean>>;
    setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>;
};

const LoginForm = ({
    rememberChecked,
    setRememberChecked,
    setFormInfo,
}: LoginFormProps) => {
    return (
        <Center>
            <Stack mt={3} space={4} w='90%'>
                <Box p='8' borderColor='blue.50' style={styles.box}>
                    <FormControl>
                        <FormControl.Label>
                            <Text style={styles.normalText}>Username</Text>
                        </FormControl.Label>
                        <Input
                            size='xl'
                            w='250px'
                            color='white'
                            borderColor='white'
                            autoCorrect
                            onChangeText={(value) =>
                                setFormInfo((prevName) => ({
                                    ...prevName,
                                    name: value,
                                }))
                            }
                        />
                        <FormControl.HelperText mb='5'>
                            Account Username
                        </FormControl.HelperText>

                        <FormControl.Label>
                            <Text style={styles.normalText}>Password</Text>
                        </FormControl.Label>
                        <Input
                            size='xl'
                            w='250px'
                            color='white'
                            borderColor='white'
                            autoCorrect
                            onChangeText={(value) =>
                                setFormInfo((prevName) => ({
                                    ...prevName,
                                    password: value,
                                }))
                            }
                            secureTextEntry={true}
                        />
                        <FormControl.HelperText mb='5'>
                            Your password
                        </FormControl.HelperText>
                    </FormControl>
                    <HStack alignItems='center' space={4}>
                        <Text color='white'>Remember Me</Text>
                        <Switch
                            size='lg'
                            value={rememberChecked}
                            onChange={(e) => {
                                setRememberChecked(!rememberChecked);
                            }}
                        />
                    </HStack>
                </Box>
            </Stack>
        </Center>
    );
};

export default LoginForm;

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

const labelStyle = { fontSize: 'xs', color: '#cccccc' };

/* 
<FormControl alignContent='center' isRequired>
    <FormControl.Label _text={labelStyle}>UserName</FormControl.Label>
    <Input mx='3' placeholder='Input' w='65%' />
</FormControl>; */
