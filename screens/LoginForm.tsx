import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Form, Item, Label, Input, ListItem, CheckBox } from 'native-base';

type LoginFormProps = {
    rememberChecked: boolean;
    setRememberChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ rememberChecked, setRememberChecked }: LoginFormProps) => {
    return (
        <Form style={styles.formStyle}>
            <View style={styles.item}>
                <Item stackedLabel style={{ borderColor: 'transparent' }}>
                    <Label style={styles.labelStyle}>Username</Label>
                    <Input
                        style={{
                            color: 'white',
                        }}
                        autoCorrect
                    />
                </Item>
            </View>
            <View style={styles.item}>
                <Item style={{ borderColor: 'transparent' }} stackedLabel last>
                    <Label style={styles.labelStyle}>Password</Label>
                    <Input style={{ color: 'white' }} />
                </Item>
            </View>
            <View>
                <ListItem style={{ borderColor: 'transparent' }}>
                    <CheckBox
                        checked={rememberChecked}
                        onPress={() => {
                            setRememberChecked(!rememberChecked);
                        }}
                    />

                    <Text
                        style={{
                            fontSize: 13,
                            color: '#cccccc',
                            paddingLeft: 10,
                        }}>
                        Remember Me
                    </Text>
                </ListItem>
            </View>
        </Form>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    normalText: { fontSize: 16, color: 'white' },
    item: {
        borderColor: 'lightgrey',
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: '#333333',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    formStyle: {
        width: 300,
        height: 200,
        padding: 10,
    },
    labelStyle: {
        fontSize: 13,
        color: '#cccccc',
    },
});
