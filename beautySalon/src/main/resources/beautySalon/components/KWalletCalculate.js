import {StyleSheet, Text, View} from "react-native";
import {substractMoney} from "../screens/Wallet";


export default function KWalletCalculate({price}) {
    return (
        <View style={KWalletCalculateStyles.appointment}>
            {/*<Text style={KWalletStockStyles.textApp}>$ {price}</Text>*/}
            {/*{substractMoney(price)}*/}
        </View>
    );
}

const KWalletCalculateStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
        padding: 10,
        color: 'red'
    },
});