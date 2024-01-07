import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {green} from "../help/Colors";
import React, {useEffect, useState} from "react";
import {MY_IP} from "../help/Ip_Help";
import SeeAppointment from "./SeeAppointment";
import UserChoice from "./UserChoice";
import {fetchDataAddEmployee, fetchDataGetEmployee, fetchDataUpdateEmployee} from "../fetchData/FetchDataEmployee";
import KSpacer from "../components/KSpacer";


export default function ModifyStock({navigation}) {

    const [employeeList, setEmployeeList] = useState([]);

    const [inputPrice, setInputPrice] = useState("");

    const [inputService, setInputService] = useState("");

    const [inputNameToChange, setInputNameToChange] = useState("");

    const [inputName, setInputName] = useState("");

    const [inputFieldToChange, setInputFieldToChange] = useState("");

    const [inputField, setInputField] = useState("");

    const [inputID, setInputID] = useState("");

    useEffect(() => {
        fetchDataGetEmployee().then((response) => {
            setEmployeeList(response);
        })
    }, []);

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={modifyStyles.image}>

            <View style={modifyStyles.container1}>


                <KSpacer height={50}/>

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
                                  style={modifyStyles.button2}>
                    <Text style={modifyStyles.buttonText}>add service</Text>
                </TouchableOpacity>

                <KSpacer height={50}/>

                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'Your id...'}
                    onChangeText={setInputID}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'Your name...'}
                    onChangeText={setInputNameToChange}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'The field you work in...'}
                    onChangeText={setInputFieldToChange}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'Change your name...'}
                    onChangeText={setInputName}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={modifyStyles.textInput}
                    placeholder={'Change your field name...'}
                    onChangeText={setInputField}
                />
                <TouchableOpacity onPress={() => {
                    let contor = 0;
                    employeeList.forEach(el => {
                            //console.log('\n' + el.firstName + '\n' + inputNameToChange + '\n\n' + el.picURL+ '\n' + inputFieldToChange + '\n\n' +el.lastName)
                            if (el.firstName === inputNameToChange && el.picURL === inputFieldToChange && el.lastName === "") {

                                fetchDataUpdateEmployee(inputID, inputName, "", "", "", inputField, "", "").then(() => alert("Change successful!"))

                                contor++;
                            }
                        }
                    )
                    if (contor === 0) {
                        alert("Incorrect data!")
                    }
                    else {
                        alert("Correct data!")
                    }
                }}
                                  style={modifyStyles.button2}>
                    <Text style={modifyStyles.buttonText}>change</Text>
                </TouchableOpacity>

            </View>

            <View style={modifyStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(UserChoice)}
                                  style={modifyStyles.button2}>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: green,
        width:
            '35%',
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
    button2: {
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