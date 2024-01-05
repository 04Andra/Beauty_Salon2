import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function KAppointment({name, number, service, price, date, time}) {
    return (
        <View style={KAppointmentStyles.appointment}>
            <Text style={KAppointmentStyles.textApp}>Name: {name} {'\n'}Phone number:
                {number} {'\n'}Service: {service} {'\n'}Price: {price} {'\n'}Date: {date} {'\n'}Time: {time}</Text>
        </View>
    );
}

const KAppointmentStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
    },
});