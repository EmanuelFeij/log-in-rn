import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type BetProps = {
    bet: Bet;
};

const Bet = ({ bet }: BetProps) => {
    return (
        <View>
            <Text>Bet</Text>
        </View>
    );
};

export default Bet;

const styles = StyleSheet.create({});
