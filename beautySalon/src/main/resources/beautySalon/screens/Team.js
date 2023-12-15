import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Appointment from "./Appointment";
import {green} from "../help/Colors";
import UserChoice from "./UserChoice";
import React from "react";

export default function Team({navigation}) {
    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={teamStyles.image}>
            <View style={teamStyles.container1}>
                <Image source={require("../help/images/user.jpg")} style={teamStyles.image2}/>
                <Text style={teamStyles.name}>Roxana</Text>
                <Image source={require("../help/images/user2.jpg")} style={teamStyles.image2}/>
                <Text style={teamStyles.name}>Maria</Text>
                <Image source={require("../help/images/user3.jpg")} style={teamStyles.image2}/>
                <Text style={teamStyles.name}>Andreea</Text>
            <TouchableOpacity onPress={() => navigation.navigate(UserChoice)} style={teamStyles.button1}>
                <Text style={teamStyles.buttonText}>back</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const teamStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: "center",
        width: '100%',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: green,
        width:
            '20%',
        height:
            40,
        justifyContent:
            'center',
        alignItems:
            'center',
        borderRadius:
            4,
        marginTop:
            50,
    },
    buttonText: {
        color: 'white',
        fontSize:
            18,
    }
    ,
    image2: {
        width: '30%',
        height: '15%',
        borderRadius: 100,
        marginTop: 50,
        marginBottom:10,
    },
    name: {
        fontSize: 18,
    },
});
