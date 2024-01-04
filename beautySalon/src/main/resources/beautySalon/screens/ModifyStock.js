import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {green} from "../help/Colors";
import React, {useState} from "react";
import {MY_IP} from "../help/Ip_Help";
import SeeAppointment from "./SeeAppointment";
import Wallet from "./Wallet";
import UserChoice from "./UserChoice";
import Stock from "./Stock";
import AntDesign from "react-native-vector-icons/AntDesign";
import {SelectList} from "react-native-dropdown-select-list/index";
import Appointment from "./Appointment";

async function fetchDataAddEmployee(firstName, service, email, telNo, picURL, massage, wallet){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addEmployee",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": service,
                "email": email,
                "telNo": telNo,
                "picURL": picURL,
                "massage": massage,
                "wallet": wallet
            })
        });
    // return responseJson.json();
}

export async function fetchDataGetEmployee() {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/employees",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return await responseJson.json();
}

    export default function ModifyStock({navigation}) {

        const [inputPrice, setInputPrice] = useState("");

        const [inputService, setInputService] = useState("");

        // function getData (data) {
        //     fetchDataGetEmployee()
        // }


    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={modifyStyles.image}>

            <View style={modifyStyles.container1}>

                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'The service you want to add...'}
                    onChangeText={setInputService}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'The price of the service...'}
                    onChangeText={setInputPrice}
                />
                <TouchableOpacity onPress={() => fetchDataAddEmployee("", inputService, "", "", "", inputPrice, "")}
                                  style={modifyStyles.button}>
                    <Text style={modifyStyles.buttonText}>add service</Text>
                </TouchableOpacity>

            </View>

            <View style={modifyStyles.container2}>

                {/*<SelectList*/}
                {/*    setInputService={(val) => setInputService(val)}*/}
                {/*    data={data}*/}
                {/*    save="value"*/}
                {/*    placeholder={"Select service to modify price:"}*/}
                {/*    searchicon={<AntDesign name={"search1"} size={16} style={appointmentStyles.service}/>}*/}
                {/*/>*/}

            </View>

            <View style={modifyStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(UserChoice)}
                                  style={modifyStyles.button}>
                    <Text style={modifyStyles.buttonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(SeeAppointment)} style={modifyStyles.button}>
                    <Text style={modifyStyles.buttonText}>appointments</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

const modifyStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: "center",
        width: '100%',
    },
    container1: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    container2: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: green,
        width:
            '20%',
        height:
            50,
        justifyContent:
            'center',
        alignItems:
            'center',
        borderRadius:
            4,
        marginHorizontal: 50,
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
        textAlign: 'center'
    }
    ,
    buttons: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    textInput: {
        backgroundColor: 'white',
        fontSize:
            16,
        fontStyle:
            'italic',
        marginBottom:
            20,
        borderRadius:
            4,
        width:
            '60%',
        height:
            40,
        padding:
            10,
    },
});