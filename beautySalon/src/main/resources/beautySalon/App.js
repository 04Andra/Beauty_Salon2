import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import UserChoice from "./screens/UserChoice";
import Appointment from "./screens/Appointment";
import Team from "./screens/Team";
import SeeAppointment from "./screens/SeeAppointment";
import Stock from "./screens/Stock";
import Wallet from "./screens/Wallet";
import ModifyStock from "./screens/ModifyStock";

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Welcome}>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
                <Stack.Screen options={{headerShown: false}} name="UserChoice" component={UserChoice}/>
                <Stack.Screen options={{headerShown: false}} name="Appointment" component={Appointment}/>
                <Stack.Screen options={{headerShown: false}} name="Team" component={Team}/>
                <Stack.Screen options={{headerShown: false}} name="SeeAppointment" component={SeeAppointment}/>
                <Stack.Screen options={{headerShown: false}} name="Stock" component={Stock}/>
                <Stack.Screen options={{headerShown: false}} name="Wallet" component={Wallet}/>
                <Stack.Screen options={{headerShown: false}} name="ModifyStock" component={ModifyStock}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
