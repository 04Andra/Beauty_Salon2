import {Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import KSpacer from "../components/KSpacer";
import UserChoice from "./UserChoice";
import {green} from "../help/Colors";
import React, {useEffect, useState} from "react";
import KProduct from "../components/KProduct";
import Appointment from "./Appointment";
import SeeAppointment from "./SeeAppointment";
import Wallet from "./Wallet";

async function fetchDataGetProduct(){
    const responseJson = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export default function Stock({navigation}) {

    const [myProduscts, setMyProducts] = useState([]);

    useEffect(() => {
        fetchDataGetProduct().then((response) =>{
            setMyProducts(response);
        }).catch(e => {
            alert("Api can't be accessed");
            console.log(e)
        })
    }, []);

    const renderDynamicStock = () => {
        return myProduscts.map((item) => {
            if(item.price !== '0.0') {
                return (
                    <KProduct
                        key={item.id}
                        data={item}

                        name={item.name}
                        price={item.price}
                        // quantity={0}
                        brand={item.brand}
                    />
                );
            }
        });
    };



    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={stockStyles.image}>
            <ScrollView style={stockStyles.scrollApp}>

                <View style={stockStyles.container1}>

                    <KSpacer height={100}/>

                    <View style={stockStyles.container3}>
                        <Text style={stockStyles.titleText2}>Stock</Text>
                    </View>

                    <KSpacer/>

                    {renderDynamicStock()}

                </View>

            </ScrollView>

            <KSpacer height={30}/>

            <View style={stockStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(SeeAppointment)}
                                  style={stockStyles.button}>
                    <Text style={stockStyles.buttonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(Wallet)} style={stockStyles.button}>
                    <Text style={stockStyles.buttonText}>wallet</Text>
                </TouchableOpacity>
            </View>

            <KSpacer/>

        </ImageBackground>
    );
}

const stockStyles = StyleSheet.create({
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
        flex: 0.5,
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