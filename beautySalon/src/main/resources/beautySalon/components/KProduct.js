import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {fetchDataAddStock} from "../fetchData/FetchDataStock";
import {green} from "../help/Colors";

export default function KProduct({name, price, data}) {
    return (
        <View style={KProductStyles.appointment}>
            <Text style={KProductStyles.textApp}>Name: {name} {'\n'}Price: {price}</Text>
            <TouchableOpacity onPress={() => fetchDataAddStock(data.name, data.price, 0.0)} style={KProductStyles.button}>
                <Text style={KProductStyles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const KProductStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        width: '80%',
        // height: '20%',
        borderRadius: 6,
        alignItems: 'flex-start',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,

    },
    textApp: {
        fontSize: 18,
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
        marginTop: 5,
    }
    ,
    buttonText: {
        color: 'white',
        fontSize:
            18,
    }
    ,
});