import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import CustomHeaderAndroid from "./src/navigation/CustomHeaderAndroid";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle={Platform.select({
                    android: 'light-content',
                    ios: 'dark-content'
                })}
                backgroundColor='rgba(0, 191, 255, 0.61)'
                translucent
            />
            <Stack.Navigator
                screenOptions={{
                    header: props => <CustomHeaderAndroid {...props} />
                }}
            >
                <Stack.Screen
                    name="Root"
                    component={DrawerNavigator}
                    options={{ title: 'Все товары' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;
