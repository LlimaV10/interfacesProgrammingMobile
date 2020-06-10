import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Product from "./Product";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  )
}

export default HomeStack