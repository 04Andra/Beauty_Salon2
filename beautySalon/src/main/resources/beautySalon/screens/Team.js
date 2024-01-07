import {Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Appointment from "./Appointment";
import {green} from "../help/Colors";
import UserChoice from "./UserChoice";
import React, {useEffect, useState} from "react";
import {fetchDataGetEmployee} from "../fetchData/FetchDataEmployee";


export default function Team({navigation}) {

    useEffect(() => {
        fetchDataGetEmployee().then((response) => {
            setEmployeeList(response);
        })
    }, []);

    const [employeeList, setEmployeeList] = useState([]);

    function checkID(id) {
        let aux
        employeeList.forEach(el => {
            if (el.id === id) {
                aux = "id: ".concat(String(el.id).concat('\n'.concat(el.firstName.concat('\n'.concat(el.picURL)))))
            }
        })
        return aux
    }

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={teamStyles.image}>


            <View style={teamStyles.container1}>

                <View style={teamStyles.rowStyle}>

                    <Image source={require("../help/images/user.jpg")} style={teamStyles.image2}/>

                        <Text style={teamStyles.name}>{checkID(11)}</Text>

                </View>

                <View style={teamStyles.rowStyle}>

                    <Image source={require("../help/images/user2.jpg")} style={teamStyles.image2}/>

                        <Text style={teamStyles.name}>{checkID(12)}</Text>

                </View>

                <View style={teamStyles.rowStyle}>

                    <Image source={require("../help/images/user3.jpg")} style={teamStyles.image2}/>

                        <Text style={teamStyles.name}>{checkID(13)}</Text>

                </View>

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
        justifyContent:
            'center',
        // alignItems: "center",
        width:
            '100%',
    }
    ,
    container1: {
        flex: 1,
        alignItems:
            'center',
        justifyContent:
            'center',
    }
    ,
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
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
    }
    ,
    image2: {
        width: '30%',
        height:
            '55%',
        borderRadius:
            100,
        marginTop:
            20,
        marginBottom:
            10,
        marginLeft: 30,
        marginRight: 20
    }
    ,
    name: {
        fontSize: 18,
        padding: 8
    }
    ,
    container: {
        flex: 1,
    }
    ,
    map: {
        width: '100%',
        height:
            '100%',
    },
    rowStyle: {
        flexDirection: 'row',
        width: '100%',
        height:
            '25%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
