import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {green} from "../help/Colors";

export default function KWalletAppointment({name, price}) {
    return (
        <View style={KWalletAppointmentStyles.appointment}>
            <Text style={KWalletAppointmentStyles.textApp}>Name: {name} {'\n'}Price: +{price}</Text>
        </View>
    );
}

const KWalletAppointmentStyles = StyleSheet.create({
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
        color: green
    },
});