import {StyleSheet, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {SelectList} from "react-native-dropdown-select-list/index";

export default function KService({serviceName}) {
    return (
        <View style={KAppointmentStyles.appointment}>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={serviceName}
                save="value"
                placeholder={"Select service"}
                searchicon={<AntDesign name={"search1"} size={16} style={KAppointmentStyles.service}/>}
            />
        </View>
    );
}

const KAppointmentStyles = StyleSheet.create({
    appointment: {
        // flex: 0.5,
        //width: '80%',
        // height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
    },
    textApp: {
        fontSize: 18,
    },
    service: {
        fontSize: 12,
        marginEnd: 8,
    }
});