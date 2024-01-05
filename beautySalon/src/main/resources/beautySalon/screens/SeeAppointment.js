import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from "react";
import {green} from "../help/Colors";
import Stock from "./Stock";
import KSpacer from "../components/KSpacer";
import KAppointment from "../components/KAppointment";
import {MY_IP} from "../help/Ip_Help";
import ModifyStock from "./ModifyStock";
import {fetchDataGetAppointment} from "../fetchData/FetchDataAppointment";



export default function SeeAppointment({navigation}) {

    const [appointmentsList, setAppointmentsList] = useState([]);

    useEffect(() => {
        fetchDataGetAppointment().then((response) => {
            setAppointmentsList(response);
        })
    }, []);


    const renderDynamicAppointment = () => {
        return appointmentsList.map((item) => {

            return (
                <KAppointment
                    key={item.id}
                    data={item}

                    name={item.firstName}
                    number={item.telNo}
                    service={item.productName}
                    price={item.productPrice}
                    date={item.day + "/" + item.month + "/" + item.year}
                    time={item.lastName}
                />
            );
        });
    };

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={seeAppointmentStyles.image}>

            <ScrollView style={seeAppointmentStyles.scrollApp}>

                <View style={seeAppointmentStyles.container1}>
                    <KSpacer height={100}/>

                    <View style={seeAppointmentStyles.container3}>
                        <Text style={seeAppointmentStyles.titleText2}>Your appointments</Text>
                    </View>

                    <KSpacer/>

                    {renderDynamicAppointment()}
                </View>

            </ScrollView>

            <KSpacer height={30}/>

            <View style={seeAppointmentStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(ModifyStock)}
                                  style={seeAppointmentStyles.button}>
                    <Text style={seeAppointmentStyles.buttonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(Stock)}
                                  style={seeAppointmentStyles.button}>
                    <Text style={seeAppointmentStyles.buttonText}>stock</Text>
                </TouchableOpacity>
            </View>
            <KSpacer/>

        </ImageBackground>
    );
}

const seeAppointmentStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
    },
    container1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
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
        marginHorizontal: 50,
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
    }
    ,
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollApp: {
        flexGrow: 1,
        width: "100%",
    },
    container3: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText2: {
        color: 'black',
        fontSize: 30,
        fontStyle: "italic",
    },
});
