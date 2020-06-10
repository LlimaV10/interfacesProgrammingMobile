import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductCard from "../components/ProductCard";
import * as axios from "axios";

const Home = ({navigation}) => {
    const [goods, setGoods] = useState(null);

    const getTypesAndThenProducts = () => {
        axios.get("http://10.0.2.2:5000/product_type")
            .then((response) => {
                getProducts(response.data)
            })
    }

    const getProducts = (types) => {
        axios.get("http://10.0.2.2:5000/products")
            .then((response) => {
                setGoods(response.data.map((item) => {
                    const typeName = types.filter(type => type.id === item.type_id)[0].name;
                    return (
                        <ProductCard
                            key={item.id}
                            img={item.image_url}
                            type={typeName}
                            title={item.title}
                            onPress={() => {
                                navigation.push('Product', {id: item.id});
                            }}
                        />
                    );
                }));
            })
    }

    useEffect(() => {
        getTypesAndThenProducts();
    }, [])

    return (
        <View style={styles.page}>
            <ScrollView style={styles.scrollView}>
                {goods}
                {/*<Text style={styles.textDivider}>Все товары:</Text>*/}
                {/*<ProductCard*/}
                {/*    type='Comp'*/}
                {/*    img='https://i8.rozetka.ua/goods/16286976/copy_lenovo_81mx002sra_5e19b14abd57d_images_16286976595.jpg'*/}
                {/*    title='aduyqwg uygq eu iuyg qwuyg uy'*/}
                {/*/>*/}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    scrollView: {
        // paddingTop: 16,
        // paddingBottom: 16,
    }
    // textDivider: {
    //     fontSize: 24,
    //     margin: 16,
    //     fontFamily: 'monospace',
    // }
});

export default Home