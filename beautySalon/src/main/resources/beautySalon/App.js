import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import UserChoice from "./screens/UserChoice";
import Appointment from "./screens/Appointment";
import Team from "./screens/Team";

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Welcome}>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
                <Stack.Screen options={{headerShown: false}} name="UserChoice" component={UserChoice}/>
                <Stack.Screen options={{headerShown: false}} name="Appointment" component={Appointment}/>
                <Stack.Screen options={{headerShown: false}} name="Team" component={Team}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
