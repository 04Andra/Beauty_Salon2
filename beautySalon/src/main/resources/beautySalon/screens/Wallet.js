import {Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import KSpacer from "../components/KSpacer";
import {green} from "../help/Colors";
import React, {useEffect, useState} from "react";
import {fetchDataGetEmployee} from "./ModifyStock";
import KWalletAppointment from "../components/KWalletAppointment";
import KWalletStock from "../components/KWalletStock";
import {fetchDataAddStock, fetchDataGetStock} from "../fetchData/FetchDataStock";
import StockAvailable from "./StockAvailable";
import KWalletCalculate from "../components/KWalletCalculate";
import {fetchDataGetAppointment} from "../fetchData/FetchDataAppointment";


export default function Wallet({navigation}) {

    const [serviceList, setServiceList] = useState([]);

    const [stockList, setStockList] = useState([]);

    useEffect(() => {
        fetchDataGetAppointment().then((response) => {
            setServiceList(response);
        })
    }, []);

    useEffect(() => {
        fetchDataGetStock().then((response) => {
            setStockList(response);
        })
    }, []);


    const renderDynamicService = () => {
        return serviceList.map((item) => {

            return (
                <KWalletAppointment
                    key={item.id}
                    data={item}

                    name={item.productName}
                    price={item.productPrice}
                />
            );
        });
    };

    const renderDynamicStock = () => {
        return stockList.map((item) => {

            return (
                <KWalletStock
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                />
            );
        });
    };

    const calculateTotal = () => {

        let c = 0;

        serviceList.forEach(el => {
            c = c + el.productPrice
        })

        stockList.forEach(el => {
            c = c - el.price
        })

        return c.toFixed(2);
    }


    return (
        <ImageBackground source={require("../help/images/wp_phone.png")} resizeMode="cover"
                         style={walletStyles.image}>
            <ScrollView style={walletStyles.scrollApp}>

                <View style={walletStyles.container1}>

                    <View style={walletStyles.container2}>

                        <KSpacer height={100}/>


                        <Text style={walletStyles.money}>$ {calculateTotal()}</Text>

                    </View>

                    <KSpacer height={100}/>

                    {renderDynamicService()}
                    {renderDynamicStock()}

                    <KSpacer height={50}/>

                </View>

            </ScrollView>

            <View style={walletStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(StockAvailable)}
                                  style={walletStyles.button}>
                    <Text style={walletStyles.buttonText}>back</Text>
                </TouchableOpacity>
            </View>

            <KSpacer height={50}/>

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
    buttons: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
});