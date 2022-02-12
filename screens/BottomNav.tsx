import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddBet, AddBetForm } from './AddBet';
import { FormInfo } from './StackNavigator';
import UserBets from './UserBets';
import About from './About';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ColorsDarkTheme } from '../colors/Colors';

type BottomOptions = {
    UserBets: FormInfo;
    AddBet: FormInfo;
    About: undefined;
};

const Tab = createBottomTabNavigator<BottomOptions>();

const AddBetButton = () => (
    <MaterialCommunityIcons
        name='plus-box-outline'
        size={24}
        color={ColorsDarkTheme.ButtonColor}
    />
);
const AboutButton = () => (
    <MaterialCommunityIcons
        name='more'
        size={24}
        color={ColorsDarkTheme.ButtonColor}
    />
);

const UserBetsButtons = () => (
    <MaterialCommunityIcons
        name='account'
        size={24}
        color={ColorsDarkTheme.ButtonColor}
    />
);

const BottomNav = ({}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

                tabBarInactiveTintColor: 'white',
                tabBarInactiveBackgroundColor: 'black',
                tabBarActiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'white',
                tabBarLabelStyle: { fontWeight: 'bold' },
            }}>
            <Tab.Screen
                name='AddBet'
                component={AddBet}
                options={{
                    tabBarIcon: AddBetButton,
                }}
            />
            <Tab.Screen
                name='UserBets'
                component={UserBets}
                options={{
                    tabBarIcon: UserBetsButtons,
                }}
            />
            <Tab.Screen
                name='About'
                component={About}
                options={{
                    tabBarIcon: AboutButton,
                }}
            />
        </Tab.Navigator>
    );
};

export { BottomNav, BottomOptions };
