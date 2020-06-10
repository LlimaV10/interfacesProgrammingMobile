import * as React from 'react';
import {NativeModules, Text, TouchableOpacity, View, Image} from "react-native";
import {DrawerActions} from "@react-navigation/native";
import myMenu from "./../img/baseline_menu_white_18dp.png"

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const CustomHeaderAndroid = ({ scene, navigation }) => {
  const {options} = scene.descriptor;
  const title = options.headerTitle;
  const routeIndex = options.index;

  return (
    <View style={styles.container}>
      <View style={styles.leftButtons}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
          style={styles.touchableButton}
        >
          <Image
            source={myMenu}
          />
          {/*<Icon*/}
          {/*  name='md-menu'*/}
          {/*  size={30}*/}
          {/*  style={styles.icon}*/}
          {/*  color='white'*/}
          {/*/>*/}
        </TouchableOpacity>
      </View>
      <View style={styles.centerButtons}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightButtons}>
      </View>
    </View>
  )
};

const styles = {
  container: {
    height: 65 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: 'rgba(0, 191, 255, 0.61)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftButtons: {
    height: '100%',
    width: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  centerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightButtons: {
    height: '100%',
    width: 55,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchableButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 18,
  }
};

export default CustomHeaderAndroid
