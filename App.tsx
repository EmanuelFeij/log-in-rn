import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import  {Stack} from './screens/StackNavigator'
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Inside from "./screens/Inside";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={'Login'} component={Login}/>
        <Stack.Screen name={'SignUp'} component={SignUp}/>
        <Stack.Screen name={'Inside'} component={Inside}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
