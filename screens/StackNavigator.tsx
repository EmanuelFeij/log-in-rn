import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Options = {
  SignUp: undefined 
  Login : undefined
  Inside: {
    userName: string;
    age: number;
    email: string;
  };
};

const Stack = createNativeStackNavigator<Options>();

export { Stack, Options };
