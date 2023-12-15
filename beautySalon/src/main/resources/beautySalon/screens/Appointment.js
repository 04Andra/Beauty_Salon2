import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {green} from "../help/Colors";
import {SelectList} from "react-native-dropdown-select-list/index";
import React, {useState} from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserChoice from "./UserChoice";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Appointment({navigation}) {

    const [selected, setSelected] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
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
        hideTimePicker();
    };

    const data = [
        {key: '1', value: 'Tuns par scurt'},
        {key: '2', value: 'Tuns par mediu'},
        {key: '3', value: 'Tuns par lung'},
        {key: '4', value: 'Vopsit'},
        {key: '5', value: 'Suvite'},
        {key: '6', value: 'Manichiura gel'},
        {key: '7', value: 'Pedichiura gel'},
    ]

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={appointmentStyles.image}>
            <View style={appointmentStyles.container1}>
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Name'}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Phone Number'}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Your email address'}
                />
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    placeholder={"Select service"}
                    searchicon={<AntDesign name={"search1"} size={16} style={appointmentStyles.service}/>}
                />

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

                <TextInput placeholder={"Do you want to tell us something?"} style={appointmentStyles.textInput2}/>
            </View>

            <View style={appointmentStyles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate(UserChoice)} style={appointmentStyles.button1}>
                    <Text style={appointmentStyles.buttonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appointmentStyles.button2}>
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
        flexDirection: 'row',
        width: '90%',
        height: '15%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    date1: {
        marginRight: 10,
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