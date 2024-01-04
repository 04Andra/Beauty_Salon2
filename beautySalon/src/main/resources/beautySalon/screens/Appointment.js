import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button} from 'react-native';
import {green} from "../help/Colors";
import {SelectList} from "react-native-dropdown-select-list/index";
import React, {useEffect, useState} from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserChoice from "./UserChoice";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {MY_IP} from "../help/Ip_Help";
import email from 'react-native-email'
import {fetchDataGetEmployee} from "./ModifyStock";
import KAppointment from "../components/KAppointment";
import KService from "../components/KService";

async function fetchDataAddAppointment(firstName, lastName, emailAddress, telNo, day, month, year, service, massage){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addAppointment",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "emailAddress": emailAddress,
                "telNo": telNo,
                "day": day,
                "month": month,
                "year": year,
                "service": service,
                "massage": massage
            })
        });
    // return responseJson.json();
}

const getDate = (data) => {
    let month = data.toString().substring(4, 7);
    let day = data.toString().substring(8, 10);
    let year = data.toString().substring(11, 15);
    let hour = data.toString().substring(16, 21);


    return {
        "day": day,
        "month": month == "Jan"? "1":
                month =="Feb"? "2":
                month == "Mar"? "3":
                month == "Apr"? "4":
                    month =="May"? "5":
                        month == "Jun"? "6":
                            month == "Jul"? "7":
                                month =="Aug"? "8":
                                    month == "Sep"? "9":
                                        month == "Oct"? "10":
                                            month =="Nov"? "11": "12",
        "year": year,
        "hour": hour,

    }
}

const handleEmail = (firstName, lastName, emailAddress, telNo, day, month, year, service, massage) => {
    const to = "andramalaescu25@yahoo.com" // string or array of email addresses
    email(to, {
        // Optional additional arguments
        // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        // bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'New appointment',
        body: 'Nume: ' + firstName + '\nOra: ' + lastName + emailAddress + '\nNumarul de telefon: ' + telNo + '\nZiua: ' + day + '\nLuna: ' + month + '\nAnul: ' + year + '\nServiciul: ' + service + '\nMesaj de la client: ' + massage,
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}


export default function Appointment({navigation}){
    const [inputNume, setInputNume] = useState("");

    const [inputTelNumber, setInputTelNumber] = useState("");

    const [inputDataSelected, setInputDataSelected] = useState("");

    const [timeSelected, setTimeSelected] = useState("");

    const [selected, setSelected] = useState("");

    const [messageSelected, setMessageSelected] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [employeeList, setEmployeeList] = useState([]);

    let addServiceList = [];

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        setInputDataSelected(date)
        // getDate(date).day;
        // getDate(date).month;
        // getDate(date).year;
        hideDatePicker();
    };

    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (date) => {
        setTimeSelected(date.toString().substring(16, 21))
        // console.log(getDate(date));
        // console.log(getDate(date).hour);
        hideTimePicker();
    };

    // const data = [
    //     {key: '1', value: 'Tuns par scurt'},
    //     {key: '2', value: 'Tuns par mediu'},
    //     {key: '3', value: 'Tuns par lung'},
    //     {key: '4', value: 'Vopsit'},
    //     {key: '5', value: 'Suvite'},
    //     {key: '6', value: 'Manichiura gel'},
    //     {key: '7', value: 'Pedichiura gel'},
    // ]



        useEffect(() => {
            fetchDataGetEmployee().then((response) => {
                setEmployeeList(response);
            })
        }, []);

        // const renderDynamicAppointment = () => {
        //     return employeeList.map((item) => {
        //
        //         return (
        //             <KService
        //                 key={item.id}
        //                 data={item}
        //
        //                 serviceName={item.lastName}
        //             />
        //         );
        //     });
        // };

// function addService () {
//     fetchDataGetEmployee()
// }
function getService () {
    employeeList.forEach(el => {
        addServiceList.push(((el.lastName).concat(": ")).concat(el.massage))
    })
    return addServiceList
}

    // function getService () {
    //     employeeList.forEach(el => {
    //         let aux = ", "
    //         el.lastName = el.lastName.concat(aux)
    //         addServiceList.push(el.lastName.concat(el.massage))
    //     })
    //     return addServiceList
    // }

        return (
            <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                             style={appointmentStyles.image}>
                <View style={appointmentStyles.container1}>
                    <TextInput
                        autoCapitalize={'none'}
                        style={appointmentStyles.textInput}
                        placeholder={'Name'}
                        onChangeText={setInputNume}
                    />
                    <TextInput
                        autoCapitalize={'none'}
                        style={appointmentStyles.textInput}
                        placeholder={'Phone Number'}
                        onChangeText={setInputTelNumber}
                    />
                    {/*<TextInput*/}
                    {/*    autoCapitalize={'none'}*/}
                    {/*    style={appointmentStyles.textInput}*/}
                    {/*    placeholder={'Your email address'}*/}
                    {/*/>*/}
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={getService()}
                        save="value"
                        placeholder={"Select service"}
                        searchicon={<AntDesign name={"search1"} size={16} style={appointmentStyles.service}/>}
                    />

                    {/*<Button title={"select"} onPress={() => console.log(getService())}/>*/}

                    {/*{renderDynamicAppointment()}*/}

                    <View style={appointmentStyles.dateTime}>
                        <TouchableOpacity onPress={showDatePicker} style={appointmentStyles.date1}>
                            <Text style={appointmentStyles.buttonText}>Select a date</Text>
                            <Text>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleDateConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showTimePicker} style={appointmentStyles.date}>
                            <Text style={appointmentStyles.buttonText}>Select a time</Text>
                            <Text>
                                <DateTimePickerModal
                                    isVisible={isTimePickerVisible}
                                    mode="time"
                                    onConfirm={handleTimeConfirm}
                                    onCancel={hideTimePicker}

                                />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput placeholder={"Do you want to tell us something?"} style={appointmentStyles.textInput2}
                               onChangeText={setMessageSelected}
                    />
                </View>

                <View style={appointmentStyles.container2}>
                    <TouchableOpacity onPress={() => navigation.navigate(UserChoice)} style={appointmentStyles.button1}>
                        <Text style={appointmentStyles.buttonText}>back</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={appointmentStyles.button2} onPress={() => {
                        if(inputNume !== '' && timeSelected !== '' && inputTelNumber !== '' && inputDataSelected !== '' && selected !== '') {
                        fetchDataAddAppointment(inputNume, timeSelected, "", inputTelNumber, getDate(inputDataSelected).day,
                            "12", getDate(inputDataSelected).year, selected, messageSelected, "")
                            .then()
                            handleEmail(inputNume, timeSelected, "", inputTelNumber, getDate(inputDataSelected).day,
                                "12", getDate(inputDataSelected).year, selected, messageSelected, "");
                        alert("Your appointment has been send!")

                        }else {
                            alert("All fields need to be completed");
                        }
                    }}>
                        <Text style={appointmentStyles.buttonText}>send</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );


}

const appointmentStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent:
            'center',
        width:
            '100%',
    }
    ,
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container1: {
        flex: 1.3,
        justifyContent:
            'flex-end',
        alignItems:
            'center',
        // backgroundColor: 'yellow',
    }
    ,
    container2: {
        flex: 0.5,
        justifyContent:
            'center',
        alignItems:
            'center',
        flexDirection:
            'row',
    }
    ,
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
    textInput2: {
        backgroundColor: 'white',
        fontSize:
            16,
        fontStyle:
            'italic',
        marginBottom:
            10,
        borderRadius:
            4,
        width:
            '60%',
        height:
            '20%',
        padding: 4,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'top',
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
        marginEnd:
            60,
    }
    ,
    button2: {
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
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
        textAlign: 'center'
    }
    ,
    timeSt: {
        marginTop: 15,
        marginBottom:
            15,
    }
    ,
    date: {
        backgroundColor: green,
        width:
            '40%',
        height:
            '45%',
        justifyContent:
            'center',
        alignItems:
            'center',
        // marginBottom:
        //     10,
        // marginTop: 10,
        borderRadius:
            4,
    },
    dateTime: {
        // flexDirection: 'row',
        width: '90%',
        height: '15%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 15,
    },
    date1: {
        // marginRight: 10,
        backgroundColor: green,
        width:
            '40%',
        height:
            '45%',
        justifyContent:
            'center',
        alignItems:
            'center',
        marginBottom:
            10,
        marginTop: 10,
        borderRadius:
            4,
    },
    service: {
        fontSize: 12,
        marginEnd: 8,
    }
});