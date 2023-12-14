import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Kebab',
      price: '30.50',
      quantity: 1,
      image: require('../assets/images/kebab.png'),
    },
    {
      id: '2',
      name: 'Burger',
      price: '30.50',
      quantity: 2,
      image: require('../assets/images/burger.png'),
    },
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
  };

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onRemove={handleRemoveItem}
    />
  );

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View>
            <Text style={styles.total}>Całkowita kwota: {totalPrice} zł</Text>
            <Button title="Realizuj zamówienie" onPress={handleCheckout} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CartScreen;
