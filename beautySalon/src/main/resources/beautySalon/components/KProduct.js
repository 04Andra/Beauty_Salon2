import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function KProduct({name, price, brand}) {
    return (
        <View style={KProductStyles.appointment}>
            <Text style={KProductStyles.textApp}>Name: {name} {'\n'}Price: {price} {'\n'}Brand: {brand}</Text>
        </View>
    );
}

const KProductStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'flex-start',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
    },
});