import React, {useState, useEffect} from 'react'
import {ScrollView, StyleSheet, View} from "react-native";
import * as axios from "axios";
import ProductCard from "../components/ProductCard";

const CategoryItems = ({navigation, route}) => {
  const [goods, setGoods] = useState(null);
  const id = route.params.id;
  const name = route.params.name;

  const getProducts = (types) => {
    axios.get("http://10.0.2.2:5000/products/" + id)
      .then((response) => {
        setGoods(response.data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              img={item.image_url}
              type={name}
              title={item.title}
              onPress={() => {
                navigation.push('Product', {id: item.id});
              }}
            />
          );
        }));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    setGoods(null);
    getProducts();
  }, [id])

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        {goods}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  }
});

export default CategoryItems