import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from "./CustomDrawerContent";
import Home from "../screens/Home";
import HomeStack from "../screens/HomeStack";
import CategoryItemsStack from "../screens/CategoryItemsStack";

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const DrawerNavigator = ({navigation, route}) => {
  const routeIndex = route.state?.index ?? 0;
  if (routeIndex === 0) {
    navigation.setOptions({headerTitle: "Все товары"});
  }
  // navigation.setOptions({ headerTitle: getHeaderTitle(routeIndex, route.params), index: routeIndex });

  return (
    <Drawer.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      backBehavior='none'
      drawerType='back'
      drawerContent={props => {
        return (
          <CustomDrawerContent
            setHeader={(title) => {
              navigation.setOptions({headerTitle: title});
            }}
            {...props}
          />
        )
      }}
    >
      <Drawer.Screen
        name='Home'
        component={HomeStack}
      />
      <Drawer.Screen
        name='CategoryItems'
        component={CategoryItemsStack}
      />
    </Drawer.Navigator>
  )
}

// const getHeaderTitle = (routeIndex, params) => {
//     switch (routeIndex) {
//         case 0:
//             return ("Все товары");
//     }
// }

export default DrawerNavigator
