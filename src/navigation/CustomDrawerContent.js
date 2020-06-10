import React, {useEffect, useState} from 'react';
import {DrawerItem, useIsDrawerOpen} from '@react-navigation/drawer';
import {Keyboard, ScrollView, Text, View} from "react-native";
import * as axios from "axios";

const CustomDrawerContent = props => {
  const [categories, setCategories] = useState(null);
  const isDrawerOpen = useIsDrawerOpen();
  if (!isDrawerOpen) {
    Keyboard.dismiss()
  }

  const getTypes = () => {
    axios.get("http://10.0.2.2:5000/product_type")
      .then((response) => {
        setCategories(response.data.map((item) => {
          return (
            <DrawerItem
              key={item.id}
              label={item.name}
              onPress={() => {
                props.navigation.jumpTo('CategoryItems', {
                  id: item.id,
                  name: item.name
                });
                props.setHeader(item.name);
              }}
            />
          )
        }))
      })
  }

  useEffect(() => {
    getTypes()
  }, []);

  return (
    <ScrollView>
      <View>
        <DrawerItem
          focused={props.state.index === 0}
          label='Все товары'
          onPress={() => {
            props.navigation.jumpTo('Home')
          }}
        />
        <Text style={styles.text}>Категории:</Text>
        {categories}
      </View>
    </ScrollView>
  );
};

const styles = {
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 12,
    color: '#c3451d'
  }
};

export default CustomDrawerContent
