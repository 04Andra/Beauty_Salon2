import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import KSpacer from "../components/KSpacer";
import KProduct from "../components/KProduct";
import {green} from "../help/Colors";
import React, {useState} from "react";
import Stock from "./Stock";

// const [wallet, setWallet] = useState(0);
//
// const addMoney = (data) => {
//     setWallet(wallet + data);
// };
//
// const substractMoney = (data) => {
//     setWallet(wallet - data);
// };

export default function Wallet({navigation}) {
    return (
        <ImageBackground source={require("../help/images/wp_phone.png")} resizeMode="cover"
                         style={walletStyles.image}>
            <ScrollView style={walletStyles.scrollApp}>
                <View style={walletStyles.container1}>

                    <View style={walletStyles.container2}>
                        <KSpacer height={100}/>
                        <Text style={walletStyles.money}>$557.89</Text>

                    </View>

                    <KSpacer height={100}/>

                    <KProduct name={"ondulator"}
                              price={"29.99"}
                              brand={"Babyliss"}
                    />
                    <KProduct name={"gel"}
                              price={"21.99"}
                              color={"Cupio"}
                    />
                    <KProduct name={"Ana Popescu"}
                              price={"Tuns par scurt"}
                              color={"15.99"}
                    />
                    <KProduct name={"Agata Sirbu"}
                              price={"Manichiura gel"}
                              color={"32.99"}
                    />
                    <KProduct name={"vopsea"}
                              price={"19.99"}
                              color={"Naturalis"}
                    />

                    <KProduct name={"Irina"}
                              price={"tuns par mediu"}
                              color={"31.99"}
                    />
                    <KProduct name={"Roxana Gheorghe"}
                              price={"pedichiura gel"}
                              color={"31.99"}
                    />

                    <KProduct name={"eyeliner"}
                              price={"13.99"}
                              color={"Mabelline"}
                    />
                    <KProduct name={"fond de ten"}
                              price={"24.99"}
                              color={"Sephora"}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate(Stock)}
                                      style={walletStyles.button}>
                        <Text style={walletStyles.buttonText}>back</Text>
                    </TouchableOpacity>

                    <KSpacer height={50}/>

                </View>

            </ScrollView>
        </ImageBackground>
    );
}

const walletStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
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
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
    }
    ,
    container1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollApp: {
        flexGrow: 1,
        width: "100%",
    },
    money: {
        fontSize: 40,
        color: "white",
        fontStyle: 'italic',
    },
});