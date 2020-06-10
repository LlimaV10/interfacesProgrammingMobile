import React, {useEffect} from 'react'
import Product from "./Product";
import {createStackNavigator} from "@react-navigation/stack";
import CategoryItems from "./CategoryItems";

const Stack = createStackNavigator();

const CategoryItemsStack = ({navigation, route}) => {
  const id = route.params.id;
  const name = route.params.name;

  useEffect(() => {
    navigation.navigate('CategoryItemsScreen', {id, name})
  }, [id, name])

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen
        name="CategoryItemsScreen"
        component={CategoryItems}
        initialParams={() => {
          return {id, name}
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  )
}

export default CategoryItemsStack