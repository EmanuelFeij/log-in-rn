import { StyleSheet } from 'react-native';
import { ColorsDarkTheme } from './Colors';

const GlobalStyles = StyleSheet.create({
    normalText: { fontSize: 16, color: 'white' },
    h1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    Container: {
        flex: 1,
        backgroundColor: ColorsDarkTheme.BackgroundColor,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Button: {
        borderRadius: 10,
        width: 300,
        backgroundColor: ColorsDarkTheme.ButtonColor,
        justifyContent: 'center',
    },
})

export default GlobalStyles