import {View} from "react-native";

export default function KProduct({name, quantity, price, color}) {
    return (
        <View style={KProductStyles.appointment}>
            <Text style={KProductStyles.textApp}>Name: {name} {'\n'}Quantity:  {quantity} {'\n'}Price: {price} {'\n'}Color: {color}</Text>
        </View>
    );
}

const KProductStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
    },
});