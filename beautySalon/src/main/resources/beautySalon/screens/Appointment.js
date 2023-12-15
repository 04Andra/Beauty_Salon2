import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button} from 'react-native';
import {green} from "../help/Colors";
import {SelectList} from "react-native-dropdown-select-list/index";
import {useState} from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserChoice from "./UserChoice";
import RNDateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";

export default function Appointment({navigation}) {

    const [selected, setSelected] = useState("");

    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    // const setDate = (event: DateTimePickerEvent, date: Date) => {
    //     const {
    //         type,
    //         nativeEvent: {timestamp, utcOffset},
    //     } = event;
    // };

    const data = [
        {key: '1', value: 'Tuns par scurt'},
        {key: '2', value: 'Tuns par mediu'},
        {key: '3', value: 'Tuns par lung'},
        {key: '4', value: 'Vopsit'},
        {key: '5', value: 'Suvite'},
        {key: '6', value: 'Manichiura gel'},
        {key: '7', value: 'Pedichiura gel'},
    ]

    return (
        <ImageBackground source={require("../help/images/wp_phone2.png")} resizeMode="cover"
                         style={appointmentStyles.image}>
            <View style={appointmentStyles.container1}>
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Name'}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Phone Number'}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={appointmentStyles.textInput}
                    placeholder={'Your email address'}
                />
                <View style={appointmentStyles.time}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        placeholder={"Select service"}
                        searchicon={<AntDesign name={"search1"} size={16} style={{marginEnd: 8}}/>}
                    />
                    {/*<TouchableOpacity onPress={() => setOpen(true)} style={appointmentStyles.date}>*/}
                    {/*    <Text style={appointmentStyles.buttonText}>Select a date</Text>*/}
                    {/*    <Text>*/}
                    {/*    <RNDateTimePicker onChange={() => setDate(new Date())}*/}
                    {/*                      value={new Date()}*/}
                    {/*    />;*/}
                    {/*    </Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View>*/}
                    {/*    <DatePicker selected={date} onChange={(date) => setDate(date)}/>*/}
                    {/*</View>*/}
                    {/*<DatePicker*/}
                    {/*    modal*/}
                    {/*    open={open}*/}
                    {/*    date={date}*/}
                    {/*    onConfirm={(date) => {*/}
                    {/*        setOpen(false)*/}
                    {/*        setDate(date)*/}
                    {/*    }}*/}
                    {/*    onCancel={() => {*/}
                    {/*        setOpen(false)*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<DatePicker date={date} onDateChange={setDate} />*/}
                    {/*<Text>*/}
                    {/*</Text>*/}
                    <View>
                        <Button title="Show Date Picker" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                </View>
                <TextInput placeholder={"Do you want to tell us something?"} style={appointmentStyles.textInput}/>
            </View>

            <View style={appointmentStyles.container2}>
                <TouchableOpacity onPress={() => navigation.navigate(UserChoice)} style={appointmentStyles.button1}>
                    <Text style={appointmentStyles.buttonText}>back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appointmentStyles.button2}>
                    <Text style={appointmentStyles.buttonText}>send</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const appointmentStyles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    container1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInput: {
        backgroundColor: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 10,
        borderRadius: 4,
        width: '60%',
        height: 40,
        padding: 10,
    },
    button1: {
        backgroundColor: green,
        width: '20%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginEnd: 60,
    },
    button2: {
        backgroundColor: green,
        width: '20%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    time: {
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeSt: {
        marginTop: 15,
        marginBottom: 15,
    },
    date: {
        backgroundColor: green,
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 4,
    }
});