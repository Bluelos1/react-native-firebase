import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import firestore from '@react-native-firebase/firestore';

const productsData = [
  {
    id: "1",
    name: "Kebab",
    price: "30.50",
    image: require("../assets/images/kebab.png"),
  },
  {
    id: "2",
    name: "Burger",
    price: "30.50",
    image: require("../assets/images/burger.png"),
  },
];

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("products")
      .onSnapshot(
        (querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    return () => unsubscribe();
  }, []);

  const renderProduct = ({ item }) => (
    <ProductCard
      name={item.name}
      price={item.price}
      image={item.image}
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
});

export default ProductListScreen;
