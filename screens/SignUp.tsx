import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Options } from './StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type LoginProps = NativeStackScreenProps< Options, 'Login'>


const SignUp = ({navigation}:LoginProps) => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button
        title="Inside"
        onPress={() => navigation.navigate('Inside', {userName: "emanuel", age: 29, email:"a"})}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
