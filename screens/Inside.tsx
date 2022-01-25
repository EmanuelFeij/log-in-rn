import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Options } from "./StackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type InsideProps = NativeStackScreenProps<Options, "Inside">;

const Inside = ({ navigation, route }: InsideProps) => {
  const options = route.params
  
    return (
    <View>
        <Text>{options.userName}</Text>
      <Text>{options.age}</Text>
      <Text>{options.email}</Text>
    </View>
  );
};

export default Inside;

const styles = StyleSheet.create({});
