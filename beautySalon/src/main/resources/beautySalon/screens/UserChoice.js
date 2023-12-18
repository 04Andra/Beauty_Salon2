import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {green} from "../help/Colors";
import Appointment from "./Appointment";
import Team from "./Team";
import SeeAppointment from "./SeeAppointment";

export default function UserChoice({navigation}) {
    return (
        <ImageBackground source={require("../help/images/wp_phone3.png")} resizeMode="cover"
                         style={userChoiceStyles.image}>

            <View style={userChoiceStyles.container1}>
                <Text style={userChoiceStyles.titleText}>Welcome to our salon!</Text>
            </View>

            <View style={userChoiceStyles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate(Appointment)} style={userChoiceStyles.button}>
                    <Text style={userChoiceStyles.buttonText}>make an appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(Team)} style={userChoiceStyles.button}>
                    <Text style={userChoiceStyles.buttonText}>see our team</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(SeeAppointment)} style={userChoiceStyles.button}>
                    <Text style={userChoiceStyles.buttonText}>enter as a coworker</Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
    );
}

const userChoiceStyles = StyleSheet.create({
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
    container2: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        fontStyle: "italic",
    },
    button: {
        backgroundColor: green,
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
