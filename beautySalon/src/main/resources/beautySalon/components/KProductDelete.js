import {fetchDataDeleteStocks} from "../fetchData/FetchDataStock";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {green} from "../help/Colors";

export default function KProductDelete({name, price, data, navigation}) {

    const handleDelete = async () => {
        try {
            await fetchDataDeleteStocks(data.id);
            navigation.replace('StockAvailable');
        } catch (error) {
            console.error('Error deleting product:', error);
            // Handle error as needed
        }
    };

    return (
        <View style={KProductStyles.appointment}>
            <Text style={KProductStyles.textApp}>Name: {name} {'\n'}Price: {price}</Text>
            <TouchableOpacity onPress={handleDelete} style={KProductStyles.button}>
                <Text style={KProductStyles.buttonText}>Delete</Text>
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