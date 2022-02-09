import { createNativeStackNavigator } from '@react-navigation/native-stack';

type FormInfo = {
    name: string;
    password: string;
};

type Options = {
    Login: undefined;
    Inside: FormInfo;
};

const Stack = createNativeStackNavigator<Options>();

export { Stack, Options, FormInfo };
