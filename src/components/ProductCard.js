import React from 'react'
import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'

const ProductCard = props => {
  const {
    type,
    img,
    title,
    onPress,
  } = props;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />
        <Text style={styles.type}>{type}</Text>
        <View style={styles.titleCon}><Text style={styles.title}>{title}</Text></View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 20,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  type: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 24,
    color: 'darkblue',
    flex: 1,
    alignItems: 'center',
  },
  titleCon: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontFamily: "American Typewriter",
    fontSize: 18,
    textAlign: 'center',
  }
});

export default ProductCard