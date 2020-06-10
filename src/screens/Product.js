import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import * as axios from "axios";

const Product = ({route}) => {
  const [product, setProduct] = useState({});
  const [descriptionElements, setDescriptionElements] = useState(null);

  const getProduct = () => {
    axios.get("http://10.0.2.2:5000/product/" + route.params.id)
      .then((responce) => {
        setProduct(responce.data);

        setDescriptionElements(responce.data.description.split('<br>').map((item, index) => {
          return (
            <Text
              key={index}
              style={styles.textMin}
            >
              {item}
            </Text>
          )
        }));
      })
  }

  useEffect(() => {
    getProduct()
  }, [route.params.id])

  return (
    <View  style={styles.screen}>
      <ScrollView>
        <Image
          style={styles.img}
          source={{
            uri: product.image_url,
          }}
        />
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.text}>
          {descriptionElements}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
  },
  img: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    alignSelf: 'center',
    marginTop: 16,
    padding: 8,
  },
  text: {
    fontSize: 16,
    padding: 16,
  },
  textMin: {
    marginTop: 8,
  }
});

export default Product