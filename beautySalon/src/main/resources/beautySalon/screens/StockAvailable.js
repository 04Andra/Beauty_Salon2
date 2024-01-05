import {fetchDataGetStock} from "../fetchData/FetchDataStock";
import {useEffect, useState} from "react";
import KProductDelete from "../components/KProductDelete";
import {ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import KSpacer from "../components/KSpacer";
import Stock from "./Stock";
import Wallet from "./Wallet";
import {green} from "../help/Colors";

export default function StockAvailable({navigation}) {



    const [stockList, setStockList] = useState([]);

    useEffect(() => {
        fetchDataGetStock().then((response) => {
            setStockList(response);
        })
    }, []);

    const renderDynamicStock = () => {
        return stockList.map((item) => {
            return (
                <KProductDelete
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    navigation={navigation}
                />
            );
        });
    };

    return (

        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={stockStyles.image}>
            <ScrollView style={stockStyles.scrollApp}>

                <View style={stockStyles.container1}>

                    <KSpacer height={100}/>

                    <View style={stockStyles.container3}>
                        <Text style={stockStyles.titleText2}>Stock available</Text>
                    </View>

                    <KSpacer/>

                    {renderDynamicStock()}

                </View>

            </ScrollView>

            <KSpacer height={30}/>

            <View style={stockStyles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate(Stock)}
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