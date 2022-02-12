import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomOptions } from './BottomNav';
import type { StackScreenProps } from '@react-navigation/stack';

type FormInfo = {
    name: string;
    password: string;
};

type ProfileScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<BottomOptions, 'UserBets'>,
    StackScreenProps<Options>
>;

type Options = {
    Login: undefined;
    BottomNav: FormInfo;
};

const Stack = createNativeStackNavigator<Options>();

export { Stack, Options, FormInfo };
