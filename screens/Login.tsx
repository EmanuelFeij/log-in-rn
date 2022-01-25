import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {Options} from './StackNavigator'

type LoginProps = NativeStackScreenProps< Options, 'Login'>

export default function Login({navigation}: LoginProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Inside"
        onPress={() => navigation.navigate('Inside', {userName: "emanuel", age: 29, email:"a"})}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
