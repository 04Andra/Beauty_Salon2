import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import UserChoice from "./UserChoice";
import {green} from "../help/Colors";

export default function Welcome({navigation}) {

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={welcomeStyles.image}>
            <View style={welcomeStyles.container1}>

            </View>

            <View style={welcomeStyles.container2}>
                <Image source={require('../help/images/logo.png')} style={welcomeStyles.logo}/>
            </View>

            <View style={welcomeStyles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(UserChoice)} style={welcomeStyles.button}>
                    <Text style={welcomeStyles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const welcomeStyles = StyleSheet.create({
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
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        backgroundColor: green,
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    logo: {
        width: '90%',
        height: '90%',
        resizeMode: "contain"
    },
});
