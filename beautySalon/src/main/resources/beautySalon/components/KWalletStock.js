import {StyleSheet, Text, View} from "react-native";
import {green} from "../help/Colors";
import React from "react";

export default function KWalletStock({name, price}) {
    return (
        <View style={KWalletStockStyles.appointment}>
            <Text style={KWalletStockStyles.textApp}>Name: {name} {'\n'}Price: -{price}</Text>
        </View>
    );
}

const KWalletStockStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
        padding: 10,
        color: 'red'
    },
});